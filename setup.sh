#!/bin/bash
# Landseek-Amphibian Setup Script
# Installs all dependencies and validates the environment.
# Run once after cloning, then use ./run.sh to start the app.

set -e

ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo ""
echo "  Landseek-Amphibian Setup"
echo "  ========================"
echo ""

# ── Check Node.js ──────────────────────────────────────────

echo "  Checking Node.js..."
if ! command -v node &> /dev/null; then
    echo "  ERROR: Node.js is not installed."
    echo "  Install Node.js 18+ from https://nodejs.org"
    exit 1
fi

NODE_VERSION=$(node -v)
NODE_MAJOR=$(echo "$NODE_VERSION" | sed 's/v//' | cut -d. -f1)

if [ "$NODE_MAJOR" -lt 18 ]; then
    echo "  ERROR: Node.js 18+ required (found $NODE_VERSION)"
    exit 1
fi

echo "  Node.js $NODE_VERSION OK"
echo ""

# ── Install bridge dependencies ────────────────────────────

echo "  Installing bridge dependencies..."
cd "$ROOT_DIR/bridge"
npm install --silent 2>&1 | tail -1
echo "  Bridge dependencies installed"

# ── Install desktop dependencies ───────────────────────────

echo "  Installing desktop dependencies..."
cd "$ROOT_DIR/desktop"
npm install --silent 2>&1 | tail -1
echo "  Desktop dependencies installed"

# ── Create data directory ──────────────────────────────────

mkdir -p "$ROOT_DIR/data"

# ── Check Ollama ───────────────────────────────────────────

echo ""
echo "  Checking Ollama (local AI backend)..."

OLLAMA_INSTALLED=0
OLLAMA_RUNNING=0
OLLAMA_HAS_MODELS=0

if command -v ollama &> /dev/null; then
    OLLAMA_INSTALLED=1
    echo "  Ollama binary found"
else
    echo "  Ollama not installed"
fi

# Check if Ollama API is running
if curl -sf http://localhost:11434/api/tags > /dev/null 2>&1; then
    OLLAMA_RUNNING=1
    MODEL_COUNT=$(curl -sf http://localhost:11434/api/tags | node -e "
        let d='';process.stdin.on('data',c=>d+=c);
        process.stdin.on('end',()=>{try{console.log(JSON.parse(d).models.length)}catch(e){console.log(0)}})
    " 2>/dev/null || echo "0")
    if [ "$MODEL_COUNT" -gt 0 ]; then
        OLLAMA_HAS_MODELS=1
        echo "  Ollama running with $MODEL_COUNT model(s)"
    else
        echo "  Ollama running but no models installed"
    fi
else
    echo "  Ollama API not reachable"
fi

echo ""

# ── MCP Configuration ─────────────────────────────────────

if [ -f "$ROOT_DIR/mcp.json" ]; then
    echo "  MCP config found (mcp.json)"
else
    echo "  No mcp.json found"
fi

# ── Summary ────────────────────────────────────────────────

echo ""
echo "  ┌─────────────────────────────────────────┐"
echo "  │            Setup Complete                │"
echo "  └─────────────────────────────────────────┘"
echo ""
echo "  To start the app:  ./run.sh"
echo ""

if [ "$OLLAMA_RUNNING" -eq 0 ]; then
    echo "  NOTE: Ollama is needed for local AI chat."
    if [ "$OLLAMA_INSTALLED" -eq 0 ]; then
        echo ""
        echo "  Install Ollama:"
        echo "    Linux:   curl -fsSL https://ollama.com/install.sh | sh"
        echo "    macOS:   brew install ollama"
        echo "    Windows: https://ollama.com/download"
    fi
    echo ""
    echo "  Start Ollama:    ollama serve"
    echo "  Pull a model:    ollama pull gemma3:1b"
    echo ""
fi

if [ "$OLLAMA_RUNNING" -eq 1 ] && [ "$OLLAMA_HAS_MODELS" -eq 0 ]; then
    echo "  Pull a model to start chatting:"
    echo "    ollama pull gemma3:1b       (small, fast)"
    echo "    ollama pull gemma3:4b       (better quality)"
    echo "    ollama pull llama3.2:3b     (good all-around)"
    echo ""
fi

echo "  Add MCP abilities: edit mcp.json to connect external tools"
echo ""
