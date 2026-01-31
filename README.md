# 🐸 Landseek-Amphibian

**The fully-integrated, APK-installable AI Agent System for Android.**

> "Live on the land (Android UI) and in the water (System Shell)."

## The Vision

Landseek-Amphibian is a complete **on-device AI agent** that merges **Landseek** (the beautiful, TPU-optimized chat UI) with **OpenClaw** (the powerful, tool-using agent runtime) into a **single, installable Android APK**.

**Goal:** No Termux setup. No command line. Just install the app, and you have a fully autonomous, tool-using AI agent on your phone.

## ✨ Key Features

- **📦 Single Install:** One APK contains the UI, the LLM engine (Gemma/Ollama), and the Agent Runtime.
- **📱 Native UI:** 120Hz Jetpack Compose interface with dark mode support.
- **🧠 On-Device TPU AI:** Runs Gemma 3 4B locally on Pixel TPU/NPU for private, offline inference.
- **🛠️ ClawdBot Tools:** Full suite of Android-native tools (SMS, Calls, Files, Memory, etc.).
- **🔌 MCP Protocol:** Model Context Protocol support for external AI services (Jules, Stitch, Context7).
- **🔄 P2P Sync:** Sync memories and context between Amphibian devices on local network.
- **🎯 Smart Routing:** Automatic task classification routes requests to the best available brain.

## 🦎 Adaptive Architecture (One App, Two Modes)

Landseek-Amphibian automatically detects device capabilities to choose the best operating mode:

### 1. **Host Mode** (High-End / Pixel 10)
*   **Active:** On devices with powerful NPUs/TPUs (Pixel 9/10, S25, etc.).
*   **Function:** Runs the full **Gemma 3 4B** model locally via MediaPipe LLM Inference.
*   **Role:** Acts as a P2P Server, hosting the chatroom and agents for itself and others.
*   **Privacy:** 100% offline capable.

### 2. **Client Mode** (Standard Devices)
*   **Active:** On older phones or when battery saver is on.
*   **Function:** Connects to a remote brain (Jules, Context7, or a local P2P Host).
*   **Role:** Acts as a UI/Sensor terminal. It exposes its tools (Camera, SMS) to the remote brain but doesn't do the heavy thinking.

## 🛠️ Available Tools (ClawdBot)

### Communication
- `send_sms` - Send SMS messages
- `make_call` - Initiate phone calls

### File System
- `read_file` - Read files from app storage
- `write_file` - Write content to files
- `list_files` - List directory contents

### Memory (RAG)
- `remember` - Store facts in long-term memory with semantic embeddings
- `recall` - Retrieve relevant context via semantic search
- `sync_peer` - Sync memories with another Amphibian device
- `discover_peers` - Find Amphibian devices on local network

### System
- `get_location` - Get device GPS coordinates
- `open_url` - Open URLs in browser
- `get_clipboard` / `set_clipboard` - Clipboard access
- `get_notifications` / `send_notification` - Notification management

### AI
- `inference` - Run local LLM inference on TPU

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Android APK Process                       │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐    ┌─────────────────────────────────┐│
│  │   Jetpack       │    │   Foreground Service            ││
│  │   Compose UI    │───▶│   (AmphibianCoreService)        ││
│  │   (120Hz)       │    │                                 ││
│  └─────────────────┘    │  ┌───────────────────────────┐  ││
│                         │  │  Embedded Node.js Runtime │  ││
│                         │  │  ┌─────────────────────┐  │  ││
│                         │  │  │   MCP Host          │  │  ││
│                         │  │  │   ┌─────┐ ┌──────┐  │  │  ││
│                         │  │  │   │Jules│ │Stitch│  │  │  ││
│                         │  │  │   └─────┘ └──────┘  │  │  ││
│                         │  │  │   ┌───────────────┐ │  │  ││
│                         │  │  │   │Context7/Local│ │  │  ││
│                         │  │  │   └───────────────┘ │  │  ││
│                         │  │  └─────────────────────┘  │  ││
│                         │  └───────────────────────────┘  ││
│                         └─────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────────────┐│
│  │  MediaPipe LLM Inference (TPU/GPU)                      ││
│  │  └─ gemma-3-4b-it / gemma-2b-it                        ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

## 🚀 Getting Started

### Prerequisites
- Android 10+ (API 29+)
- For TPU inference: Pixel 6+ or compatible device with NPU
- Node.js v22+ ARM64 binary (bundled in assets)

### Building

1. Clone the repository:
```bash
git clone https://github.com/your-org/Landseek-Amphibian.git
cd Landseek-Amphibian
```

2. Set up the Node.js runtime:
```bash
./scripts/setup_runtime.sh
```

3. Install bridge dependencies:
```bash
cd bridge
npm install
cd ..
```

4. Build the Android APK:
```bash
cd android
./gradlew assembleRelease
```

### Running

1. Install the APK on your device
2. Grant required permissions (SMS, Phone, Location as needed)
3. The agent automatically starts and initializes the TPU model
4. Chat with your on-device AI!

## 🔑 Environment Variables

For external brain connections, set these before building:

```bash
export JULES_API_KEY="your-jules-api-key"
export STITCH_API_KEY="your-stitch-api-key"  
export CONTEXT7_API_KEY="your-context7-api-key"
```

## 📋 Roadmap

- [x] **Phase 1: Architecture Design** - Define Node.js embedding strategy
- [x] **Phase 2: Prototype Bridge** - Connect Landseek UI to OpenClaw agent
- [x] **Phase 3: Tool Integration** - Full ClawdBot tool support
- [x] **Phase 4: TPU Inference** - MediaPipe LLM integration for on-device AI
- [ ] **Phase 5: The Embedding** - Compile Node.js for Android and bundle in assets
- [ ] **Phase 6: Release** - First APK build

## 🔒 Security

- **Localhost Binding:** The Node server binds ONLY to `127.0.0.1` to prevent external access.
- **Token Auth:** WebSocket connections require a secret token passed from Android.
- **API Keys:** Keys stored in Android KeyStore, passed to Node process via Environment Variables.
- **Scoped Storage:** File access restricted to app sandbox by default.

## 📄 License

MIT
