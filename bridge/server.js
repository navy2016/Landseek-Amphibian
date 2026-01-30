/**
 * Amphibian Bridge Server (Node.js Side)
 * 
 * This runs inside the embedded Node binary on the Android device.
 * It listens on localhost for commands from the Kotlin UI and routes them
 * to the OpenClaw agent runtime.
 */

const WebSocket = require('ws');
const http = require('http');

// Configuration
const PORT = process.env.AMPHIBIAN_PORT || 3000;
const AUTH_TOKEN = process.env.AMPHIBIAN_TOKEN; // Passed from Android via Env Var

// Event Types
const EVENTS = {
    // Inbound (UI -> Agent)
    EXECUTE_TASK: 'EXECUTE_TASK',
    STOP_TASK: 'STOP_TASK',
    PROVIDE_INPUT: 'PROVIDE_INPUT',
    
    // Outbound (Agent -> UI)
    STATUS_UPDATE: 'STATUS_UPDATE',
    LOG: 'LOG',
    TOOL_USE: 'TOOL_USE',
    RESULT: 'RESULT',
    ERROR: 'ERROR'
};

// State
let activeSocket = null;
let agentBusy = false;

const AmphibianHost = require('./mcp_host');

// Initialize MCP Host
const host = new AmphibianHost();

// Start MCP Servers (Brain Modules)
async function startBrains() {
    try {
        // Connect to Jules (Coding)
        if (process.env.JULES_API_KEY) {
            await host.connectStdioServer('jules', 'node', ['./mcp_servers/jules_adapter.js']);
        }

        // Connect to Stitch (UI)
        if (process.env.STITCH_API_KEY) {
            await host.connectStdioServer('stitch', 'node', ['./mcp_servers/stitch_adapter.js']);
        }

        // Connect to Context7 (Memory)
        if (process.env.CONTEXT7_API_KEY) {
            await host.connectStdioServer('context7', 'node', ['./mcp_servers/context7_adapter.js']);
        }
        
        // Connect to Android Local System
        // In bridge mode, this is handled via internal function calls, but could be exposed as MCP too
        
        console.log('🧠 All Brain Modules Connected.');
    } catch (e) {
        console.error('Failed to connect brains:', e);
    }
}

startBrains();

// Mock Agent Interface (Now using MCP!)
const agent = {
    execute: async (task, onLog) => {
        onLog('Analyzing task...', 'thought');
        
        // 1. Get all available tools
        const tools = await host.getAllTools();
        onLog(`Found ${tools.length} available tools from connected brains.`, 'info');
        
        // 2. Simple logic to route task (Mock Planner)
        if (task.includes('UI') || task.includes('screen')) {
            onLog('Delegating to Google Stitch for UI generation...', 'thought');
            const result = await host.callTool('stitch', 'generate_ui', { prompt: task });
            return result.content[0].text;
        } 
        else if (task.includes('code') || task.includes('refactor')) {
            onLog('Delegating to Google Jules for coding...', 'thought');
            const result = await host.callTool('jules', 'create_coding_session', { prompt: task, source: 'current' });
            return result.content[0].text;
        }
        else {
             // Fallback to local
             onLog(`Executing locally: echo "Hello Pixel"`, 'tool');
             await new Promise(r => setTimeout(r, 500));
             return `Task "${task}" completed successfully on local silicon.`;
        }
    }
};

// Start Server
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Amphibian Bridge Active 🐸');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws, req) => {
    // Simple Auth Check
    const token = req.headers['sec-websocket-protocol'];
    if (AUTH_TOKEN && token !== AUTH_TOKEN) {
        console.log('Unauthorized connection attempt');
        ws.close(1008, 'Unauthorized');
        return;
    }

    console.log('Android UI connected to Bridge');
    activeSocket = ws;

    // Send Hello
    send(EVENTS.STATUS_UPDATE, { status: 'READY', message: 'Agent ready for commands.' });

    ws.on('message', async (message) => {
        try {
            const data = JSON.parse(message);
            handleMessage(data);
        } catch (e) {
            console.error('Failed to parse message:', e);
        }
    });

    ws.on('close', () => {
        console.log('Android UI disconnected');
        activeSocket = null;
    });
});

async function handleMessage(data) {
    switch (data.type) {
        case EVENTS.EXECUTE_TASK:
            if (agentBusy) {
                send(EVENTS.ERROR, { message: 'Agent is busy.' });
                return;
            }
            
            agentBusy = true;
            send(EVENTS.STATUS_UPDATE, { status: 'WORKING', task: data.payload.task });
            
            try {
                const result = await agent.execute(data.payload.task, (text, type) => {
                    send(EVENTS.LOG, { text, type });
                });
                send(EVENTS.RESULT, { result });
            } catch (err) {
                send(EVENTS.ERROR, { message: err.message });
            } finally {
                agentBusy = false;
                send(EVENTS.STATUS_UPDATE, { status: 'IDLE' });
            }
            break;

        case EVENTS.STOP_TASK:
            // Implement stop logic
            break;
    }
}

function send(type, payload) {
    if (activeSocket && activeSocket.readyState === WebSocket.OPEN) {
        activeSocket.send(JSON.stringify({ type, payload }));
    }
}

server.listen(PORT, '127.0.0.1', () => {
    console.log(`🐸 Amphibian Bridge listening on 127.0.0.1:${PORT}`);
});
