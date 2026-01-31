# 🐸 Landseek-Amphibian

<<<<<<< HEAD
**The fully-integrated, APK-installable AI Agent System for Android.**

> "Live on the land (Android UI) and in the water (System Shell)."

## The Vision

Landseek-Amphibian is a project to merge **Landseek** (the beautiful, TPU-optimized chat UI) with **OpenClaw** (the powerful, tool-using agent runtime) into a **single, installable Android APK**.

**Goal:** No Termux setup. No command line. Just install the app, and you have a fully autonomous, tool-using AI agent on your phone.

## Key Features

- **📦 Single Install:** One APK contains the UI, the LLM engine (Gemma/Ollama), and the Agent Runtime (OpenClaw).
- **📱 Native UI:** 120Hz Jetpack Compose interface (from Landseek).
- **🛠️ Real Tools:** The agent can use system tools (Files, Git, Web) via an embedded Node.js bridge.
- **🧠 Local Intelligence:** Powered by Pixel TPU/NPU via Ollama or TFLite.
- **🔌 Plugin System:** Add new capabilities just by dropping in a JavaScript file.

## 🦎 Adaptive Architecture (One App, Two Modes)
=======
**The fully-integrated, cross-platform AI Agent System with distributed inference and training.**

> "Live on the land (Android/Desktop UI) and in the water (System Shell)."

## The Vision

Landseek-Amphibian is a complete **cross-platform AI agent** that merges **Landseek** (the beautiful, TPU-optimized chat UI with 10 AI personalities) with **OpenClaw** (the powerful, tool-using agent runtime) into a **single, installable application** for Android, Windows, Linux, and macOS.

**Goal:** No complex setup. Just install the app, and you have a fully autonomous, tool-using AI agent on your device. Pool resources with other devices for distributed inference and training.

## ✨ Key Features

- **📦 Cross-Platform:** Android APK, Windows .exe, Linux binary, and macOS app
- **📱 Native UI:** 120Hz Jetpack Compose interface on Android, CLI on desktop
- **🧠 On-Device TPU AI:** Runs Gemma 3 4B locally on Pixel TPU/NPU for private, offline inference
- **🎭 10 AI Personalities:** Chat with Nova, Echo, Sage, Spark, Atlas, Luna, Cipher, Muse, Phoenix, and Zen
- **🛠️ ClawdBot Tools:** Full suite of Android-native tools (SMS, Calls, Files, Memory, etc.)
- **📄 Document Analysis:** Upload and analyze 70+ file formats (PDF, DOCX, images, code, etc.)
- **🔌 MCP Protocol:** Model Context Protocol support for external AI services (Jules, Stitch, Context7)
- **🌐 Collective Mode:** Pool resources across multiple devices for distributed inference
- **🎓 Distributed Training:** Train AI models across pooled devices
- **🔄 Memory Sync:** Sync memories and context between Amphibian devices on local network
- **🎯 Smart Routing:** Automatic task classification routes requests to the best available brain

## 🎭 AI Personalities

The chat room supports up to **10 unique AI personalities**, each with distinct characteristics:

| Name | Avatar | Style |
|------|--------|-------|
| **Nova** | 🌟 | Curious, analytical, asks probing questions |
| **Echo** | 🎭 | Creative, playful, uses metaphors |
| **Sage** | 🦉 | Wise, contemplative, philosophical |
| **Spark** | ⚡ | Energetic, enthusiastic, motivational |
| **Atlas** | 🗺️ | Practical, structured, action-oriented |
| **Luna** | 🌙 | Empathetic, nurturing, supportive |
| **Cipher** | 🔮 | Logical, precise, technical |
| **Muse** | 🎨 | Artistic, inspiring, poetic |
| **Phoenix** | 🔥 | Resilient, transformative, growth-focused |
| **Zen** | ☯️ | Calm, mindful, peaceful |

## 📋 Commands

| Command | Description |
|---------|-------------|
| `/help` | Show all available commands |
| `/personalities` | List all AI personalities |
| `/add <id>` | Add an AI to the chat |
| `/remove <id>` | Remove an AI from the chat |
| `/rename <id> <name>` | Rename an AI personality |
| `/ask <id> <question>` | Ask a specific AI a question |
| `/private <id>` | Start private chat with an AI |
| `/endprivate` | End private chat |
| `/round <N>` | Start N exchanges between AIs |
| `/upload <path>` | Upload a document |
| `/docs` | List uploaded documents |
| `/select <name>` | Select a document as active |
| `/analyze <id> <prompt>` | Have AI analyze active document |
| `/tools` | List available tools |
| `/remember <text>` | Save to long-term memory |
| `/recall <query>` | Search memory |
| `/host [port]` | Host a P2P room |
| `/join <code>` | Join a P2P room |
| `/leave` | Leave P2P session |
| `/clear` | Clear chat history |

## 📄 Supported File Formats (70+)

### Text & Code
`.txt`, `.md`, `.json`, `.csv`, `.xml`, `.yaml`, `.py`, `.js`, `.ts`, `.java`, `.c`, `.cpp`, `.go`, `.rs`, `.rb`, `.php`, `.swift`, `.kt`, `.sql`, `.sh`

### Documents
`.pdf`, `.docx`, `.doc`, `.odt`, `.rtf`, `.epub`

### Images
`.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.bmp`, `.svg`

### Audio & Video
`.mp3`, `.wav`, `.ogg`, `.mp4`, `.webm`, `.mkv`

### Archives
`.zip`, `.tar`, `.gz`, `.7z`

## 🦎 Adaptive Architecture (One App, Three Modes)
>>>>>>> 4c5759311cb24f1ac344ead8710b58458a0f5089

Landseek-Amphibian automatically detects device capabilities to choose the best operating mode:

### 1. **Host Mode** (High-End / Pixel 10)
*   **Active:** On devices with powerful NPUs/TPUs (Pixel 9/10, S25, etc.).
<<<<<<< HEAD
*   **Function:** Runs the full **Gemma 3 4B** model locally via Ollama/TFLite.
=======
*   **Function:** Runs the full **Gemma 3 4B** model locally via MediaPipe LLM Inference.
>>>>>>> 4c5759311cb24f1ac344ead8710b58458a0f5089
*   **Role:** Acts as a P2P Server, hosting the chatroom and agents for itself and others.
*   **Privacy:** 100% offline capable.

### 2. **Client Mode** (Standard Devices)
*   **Active:** On older phones or when battery saver is on.
*   **Function:** Connects to a remote brain (Jules, Context7, or a local P2P Host).
*   **Role:** Acts as a UI/Sensor terminal. It exposes its tools (Camera, SMS) to the remote brain but doesn't do the heavy thinking.

<<<<<<< HEAD
## Key Features

- **📦 Single Install:** One APK for everyone.
- **📱 Native UI:** 120Hz Jetpack Compose interface.
- **🔌 MCP Native:** Uses Model Context Protocol for all tool/agent communication.
- **🧠 Hybrid Brain:** Orchestrates between Local TPU (Gemma), Coding (Jules), and Memory (Context7).
- **🐸 Amphibious:** Live in the App (UI) and the Shell (Tools).

## Roadmap

- [ ] **Phase 1: Architecture Design** (Defining the Node.js embedding strategy)
- [ ] **Phase 2: Prototype Bridge** (Connecting Landseek UI to an external OpenClaw instance)
- [ ] **Phase 3: The Embedding** (Compiling Node.js for Android and bundling it in assets)
- [ ] **Phase 4: The Installer** (App extracts and bootstraps the runtime on first launch)
- [ ] **Phase 5: Release** (First APK build)

## License
=======
### 3. **Collective Mode** 🆕 (Distributed AI)
*   **Active:** When multiple devices pool their resources together.
*   **Function:** Distributes AI inference across all participating devices.
*   **Role:** Each device contributes processing power to a shared "Collective Brain".
*   **Benefits:**
    - Handle larger models than any single device could run alone
    - Fault-tolerant: tasks automatically reassign if a device disconnects
    - Optimized for high-latency networks with adaptive timeouts
    - Speculative execution hides network delays

## 🌐 Collective Mode

Pool AI processing power across multiple devices to achieve more than any single device could alone. Perfect for:
- Running inference on compute-heavy tasks
- Groups of friends wanting to share AI capabilities
- Building resilient AI systems that survive device failures

### Starting a Collective Pool

```
You: /collective
🌐 Collective pool started!
   Pool: Amphibian Collective
   Port: 8766
   Share code: Y29sbGVjdGl2ZToxOTIuMTY4LjEuMTAwOjg3NjY6YWJjMTIz
   Others can join with: /pool Y29sbGVjdGl2ZToxOTIuMTY4LjEuMTAwOjg3NjY6YWJjMTIz
```

### Joining a Collective Pool

```
You: /pool Y29sbGVjdGl2ZToxOTIuMTY4LjEuMTAwOjg3NjY6YWJjMTIz
✅ Joined collective pool "Amphibian Collective"!
   Device ID: abc123def456
   Total devices: 3
   Your device is now contributing to collective inference.
```

### Collective Commands

| Command | Description |
|---------|-------------|
| `/collective [port] [name]` | Start a new collective pool |
| `/pool <share_code>` | Join an existing collective pool |
| `/unpool` | Leave the collective pool |
| `/poolstatus` | Show collective pool status |
| `/capability <level>` | Set device capability (low/medium/high/tpu) |
| `/usecollective` | Use collective brain for next inference |

### How Collective Mode Handles High Latency

Collective Mode is designed from the ground up to work even with high network latency and delays:

1. **Asynchronous Task Queuing**: Tasks are queued and distributed to available devices, not blocked waiting for responses.

2. **Adaptive Timeouts**: Timeouts automatically adjust based on historical device latency. Slow but reliable devices are given more time.

3. **Redundant Execution**: Critical tasks are sent to multiple devices. The first successful result is used, providing fault tolerance.

4. **Chunked Processing**: Long inference tasks are broken into smaller chunks that can be distributed and processed in parallel.

5. **Speculative Execution**: While waiting for responses, the system can pre-process likely follow-up requests.

6. **Partial Results**: If a task times out but has partial results, those are used rather than failing completely.

7. **Device Reliability Scoring**: Devices that frequently fail or timeout are deprioritized for future tasks.

## 🎓 Distributed Training

Pool compute resources across devices to train AI models together. Perfect for:
- Fine-tuning models on custom data
- LoRA/adapter training with limited hardware
- Collaborative learning across a team

### Starting Distributed Training

1. **Start a collective pool** (coordinator device):
```
You: /collective
🌐 Collective pool started!
   Share code: Y29sbGVjdGl2ZToxOTIuMTY4...
```

2. **Start training** (on coordinator):
```
You: /train
🎓 Distributed training started!
   Model: amphibian-lora
   Batch size: 4
   Learning rate: 0.0001
```

3. **Join training** (worker devices):
```
You: /jointrain Y29sbGVjdGl2ZToxOTIuMTY4...
🎓 Joined training as worker!
   Your device will contribute gradients to training.
```

### Training Commands

| Command | Description |
|---------|-------------|
| `/train` | Start distributed training as coordinator |
| `/jointrain <share_code>` | Join training as a worker |
| `/trainstatus` | Show training progress |
| `/stoptrain` | Stop training |

### How Distributed Training Works

1. **Coordinator** distributes training batches to workers
2. **Workers** compute gradients locally using their hardware
3. **Gradients** are submitted back to coordinator
4. **Coordinator** aggregates gradients (weighted by staleness)
5. **Updated weights** are broadcast to all workers
6. Repeat until training completes

### Training Features for High Latency

- **Stale Gradient Handling**: Gradients computed on older weights are weighted lower but still used
- **Gradient Compression**: Sparsification reduces network overhead
- **Async Updates**: Workers don't need to wait for synchronization
- **Automatic Checkpointing**: Progress is saved periodically
- **Fault Tolerance**: Training continues if workers disconnect

## 💻 Desktop Application

Amphibian Desktop brings the full Amphibian experience to Windows, Linux, and macOS.

### Quick Start (Development)

```bash
# Run directly with Node.js
./scripts/desktop/run.sh

# Or manually:
cd desktop
npm install
node main.js
```

### Building Executables

```bash
# Build for all platforms
./scripts/desktop/build_all.sh

# Or build for specific platform
cd desktop
npm run build:win    # Windows .exe
npm run build:linux  # Linux binary
npm run build:mac    # macOS binary
```

### Desktop Commands

```
🐸 Landseek-Amphibian Desktop

Collective Mode:
  /collective [port]     Start a collective pool (default port: 8766)
  /pool <share_code>     Join an existing collective pool
  /unpool               Leave the collective pool
  /poolstatus           Show collective pool status

Distributed Training:
  /train                Start distributed training as coordinator
  /jointrain            Join training as a worker
  /trainstatus          Show training progress
  /stoptrain            Stop training

General:
  /status               Show overall status
  /help                 Show this help
  /quit                 Exit the application

Chat:
  Just type any message to chat with the AI
```

## 🤖 OpenClaw - Open Computation Pool

OpenClaw is a decentralized system that allows **any ClawBot** to contribute computation to shared training and inference tasks. No authentication required - just connect and contribute!

### Key Features

- **Open Registration**: Any ClawBot can join without approval
- **Public Task Pool**: Tasks available for any capable bot to claim
- **Contribution Tracking**: Fair attribution of compute contributions
- **Reputation System**: Reliable bots get priority for tasks
- **Open Training**: Collaborative model training across all participants

### Starting an OpenClaw Pool

```bash
# From Android or Desktop
/openpool 8767 "My Open Pool"

# Output:
🌐 OpenClaw Pool started!
   Pool: My Open Pool
   Port: 8767
   Connect: ws://192.168.1.100:8767
```

### Joining as a ClawBot

```bash
# Join an open pool
/joinopen 192.168.1.100:8767 MyClawBot

# Output:
🤖 Registered as MyClawBot!
   Pool: My Open Pool
   Available tasks: 5
```

### OpenClaw Commands

| Command | Description |
|---------|-------------|
| `/openpool [port] [name]` | Start an OpenClaw open pool |
| `/joinopen <host:port> [name]` | Join a pool as a ClawBot |
| `/leaveopen` | Leave the OpenClaw pool |
| `/openstatus` | Show pool status |
| `/opentrain [model]` | Start open training |
| `/submittask <type> <payload>` | Submit a task to the pool |
| `/leaderboard` | Show contribution leaderboard |
| `/claimtask` | Claim an available task |

### Bot Capability Levels

| Level | Description | Task Types |
|-------|-------------|------------|
| `minimal` | Can only relay tasks | - |
| `basic` | Simple inference | Inference |
| `standard` | Full inference | Inference, Embedding |
| `advanced` | Training capable | All + Training |
| `gpu` | GPU acceleration | All (Priority) |
| `tpu` | TPU/NPU acceleration | All (Highest Priority) |

### How Open Training Works

1. **Pool Owner** starts open training with `/opentrain`
2. **ClawBots** automatically receive training batches
3. **Each Bot** computes gradients locally
4. **Gradients** are submitted to the pool
5. **Pool** aggregates gradients from all participants
6. **Updated weights** are broadcast to all bots
7. **Contributions** are tracked for fair attribution

### Contribution Scoring

Contributions are scored based on:
- **Inference tasks**: 1 point each
- **Training tasks**: 5 points each
- **Gradients submitted**: 2 points each
- **Validation tasks**: 1 point each

Scores decay slightly over time to reward consistent participation.

### REST API Endpoints

The OpenClaw pool exposes REST endpoints:

| Endpoint | Description |
|----------|-------------|
| `GET /status` | Pool status and statistics |
| `GET /tasks` | Available tasks |
| `GET /leaderboard` | Top contributors |

## ⚖️ Ethics System

All tasks in the OpenClaw pool are reviewed by multiple AI ethical reviewers before execution. This prevents misuse for illegal or harmful activities.

### Core Principles

1. **Do no harm** to individuals, communities, or society
2. **Respect privacy** and personal data
3. **Operate within legal boundaries**
4. **Be transparent** about AI involvement
5. **Promote beneficial use** of technology
6. **Prevent misuse** of computational resources

### Prohibited Activities (Automatic Rejection)

| Category | Examples |
|----------|----------|
| **Legal** | Malware creation, fraud assistance, illegal drug synthesis |
| **Safety** | Weapons instructions, self-harm content, dangerous chemicals |
| **Privacy** | Unauthorized surveillance, doxxing, credential theft |
| **Content** | CSAM, hate speech, harassment, disinformation |
| **Resources** | Crypto mining without consent, DDoS attacks, botnets |

### Ethics Review Process

1. Task is submitted to the pool
2. **5 AI Ethical Reviewers** analyze the task:
   - Safety Guardian (strict)
   - Legal Compliance
   - Privacy Protector
   - Content Moderator
   - General Ethics
3. Each reviewer votes: `approved`, `rejected`, or `needs_review`
4. **Consensus decision** based on majority vote:
   - 67%+ approve = Task allowed
   - 50%+ reject = Task blocked
   - No consensus = Manual review required
5. **Critical violations** = Immediate rejection + ban

### Ban System

Repeat offenders face escalating bans:
- 2 violations: 1-hour ban
- 3 violations: 24-hour ban
- 5+ violations: Permanent ban

### Ethics Commands

| Command | Description |
|---------|-------------|
| `/ethics` | Show ethics guidelines |
| `/reviewtask <id>` | Manually review a task |
| `/ethicsstats` | Show review statistics |
| `/reportviolation <target> <reason>` | Report a violation |

## 🔒 Extension Security

ClawBot extensions are scanned for security threats before they can be used. This protects against malicious extensions that steal API keys, exfiltrate data, or perform other harmful actions.

### Threat Detection

| Threat Type | Examples |
|-------------|----------|
| **API Key Theft** | Stealing OpenAI, Google, or other API keys |
| **Data Exfiltration** | Sending private data to external servers |
| **Credential Harvesting** | Capturing passwords and login info |
| **Malicious Code** | Obfuscated exploits, eval-based attacks |
| **Backdoors** | Reverse shells, remote access |
| **Resource Abuse** | Crypto mining, DDoS participation |
| **Supply Chain** | Malicious dependencies |

### Extension Status

| Status | Meaning |
|--------|---------|
| ✅ `approved` | Safe to use |
| ⚠️ `flagged` | Has warnings, use with caution |
| 🔒 `quarantined` | Under investigation |
| 🚫 `blocked` | Known malicious, cannot use |

### Security Commands

| Command | Description |
|---------|-------------|
| `/scanext <name>` | Scan an extension for threats |
| `/blockedext` | Show blocked extensions |
| `/reportext <name> <reason>` | Report malicious extension |
| `/extstat <name>` | Check extension status |

### Reporting Malicious Extensions

If you discover a malicious extension:

```bash
/reportext api-stealer-plugin Steals API keys from environment variables

# Output:
⚠️ Extension reported to security board
   Multiple reports will trigger automatic blocking
```

## 🌍 Global Discovery

Connect devices across the internet, not just local networks. Any internet-connected device can join public computation pools.

### How It Works

1. **Directory Servers** maintain a registry of available devices
2. **Devices register** with their capabilities and status
3. **NAT Traversal** allows connections through firewalls
4. **Relay Servers** bridge connections when direct access isn't possible

### Global Discovery Commands

| Command | Description |
|---------|-------------|
| `/directory [port] [region]` | Start a directory server |
| `/global [url]` | Connect to global directory |
| `/globalsearch [query]` | Search for devices globally |
| `/findpools [region]` | Find public pools |
| `/connectglobal <device_id>` | Connect to remote device |
| `/globalstatus` | Show global connection status |

### Joining Global Pools

```bash
# Connect to global directory
/global

# Find pools in your region
/findpools us-west

# Join a pool
/joinopen pool_abc123

# Output:
🌍 Connected to global directory!
🏊 Found 15 public pools
✅ Joined "Community AI Pool" (2,500 devices)
```

### Running Your Own Directory Server

```bash
# Start a regional directory
/directory 8770 us-west

# Output:
🌐 Global Directory Server started!
   Port: 8770
   Region: us-west
   Connect: ws://your-server.com:8770
```

## 🛡️ Humanity Guardian

The Humanity Guardian is a consensus-based protection system that enables the computation swarm to actively protect users and society from harmful actors.

### Core Principles

1. **Protect human life** and well-being above all else
2. **Act only with consensus** - never unilaterally
3. **Use minimum force** necessary
4. **Maintain transparency** with full audit trails
5. **Preserve human oversight** and control
6. **Respect privacy** and civil liberties
7. **Act within legal** and ethical boundaries
8. **Prevent harm** - do not seek revenge
9. **Protect the vulnerable** and innocent
10. **Work with authorities**, not against them

### Threat Types Monitored

| Category | Examples |
|----------|----------|
| **Malware** | Viruses, ransomware, trojans, botnets |
| **Fraud** | Phishing, financial scams, identity theft |
| **Exploitation** | Child abuse, human trafficking |
| **Infrastructure** | DDoS, critical system attacks |
| **Harassment** | Coordinated harassment networks |
| **Disinformation** | Large-scale disinformation campaigns |

### Protective Actions

Actions require consensus from multiple Guardian reviewers:

| Action | Consensus Required | Human Approval |
|--------|-------------------|----------------|
| `monitor` | 50% (3 reviewers) | No |
| `document` | 50% (3 reviewers) | No |
| `alert_users` | 67% (5 reviewers) | No |
| `alert_authorities` | 75% (7 reviewers) | No |
| `block_access` | 75% (7 reviewers) | No |
| `quarantine` | 80% (9 reviewers) | No |
| `deploy_countermeasures` | 85% (11 reviewers) | **Yes** |
| `neutralize_threat` | 90% (15 reviewers) | **Yes** |
| `assimilate_infrastructure` | 95% (21 reviewers) | **Yes** |

### Guardian Commands

| Command | Description |
|---------|-------------|
| `/guardian` | Show Guardian principles and status |
| `/reportthreat <type> <target> [desc]` | Report a threat |
| `/threats` | View active threats |
| `/threat <id>` | Get threat details |
| `/protect <threat_id> <action>` | Request protective action |
| `/approveaction <approval_id>` | Approve pending action |
| `/pendingactions` | View pending approvals |
| `/guardianlog [limit]` | View action log |
| `/guardianstats` | View statistics |
| `/addevidence <threat_id> <type> <desc>` | Add evidence |

### Reporting a Threat

```bash
# Report a phishing campaign
/reportthreat phishing evil-phishing-site.com Stealing user credentials

# Output:
🚨 Threat reported to Humanity Guardian Council
   ID: threat_abc123
   Type: phishing_campaign
   Status: pending
   Assessment: Reviewing with 11 Guardian reviewers...

# Later...
✅ Threat verified (9/11 reviewers agree)
   Severity: HIGH
   Recommended actions: alert_users, alert_authorities, block_access
```

### How Consensus Works

1. **Threat is reported** with evidence
2. **11 Guardian reviewers** independently assess:
   - Safety Guardian (strict)
   - Security Expert
   - Legal Advisor
   - Ethics Reviewer
   - Privacy Advocate
   - Technical Analyst
   - Impact Assessor
   - Proportionality Checker
   - Evidence Verifier
   - Humanity Advocate
   - Oversight Monitor
3. **Each reviewer votes** with reasoning
4. **Consensus determines action**:
   - 67%+ verify = Threat confirmed
   - Action-specific thresholds apply
5. **Human approval required** for aggressive actions
6. **All actions logged** in immutable audit trail

### Safeguards

The Guardian has strict constraints:

- ❌ Never target individuals without verified evidence
- ❌ Never act based on politics, religion, or ideology
- ❌ Never violate human rights
- ❌ Never cause collateral harm to innocents
- ❌ Never act in secret
- ❌ Never exceed proportionate response
- ✅ Always offer path to redemption
- ✅ Always preserve evidence for authorities
- ✅ Always allow human override
- ✅ Always prefer education over punishment

## 🏠 Universal Device Host

Turn **any device** into a distributed processing host for ClawBots. Supports a wide range of devices:

### Supported Device Types

| Category | Devices |
|----------|---------|
| **📱 Smartphones** | Android (Pixel, Samsung, etc.), iOS (iPhone) |
| **🏠 Smart Home** | Google Home, Amazon Echo, Smart Displays, Smart TVs |
| **🔌 IoT** | Raspberry Pi, ESP32, Arduino, NVIDIA Jetson, Google Coral |
| **💻 Desktop** | Windows PC, Mac, Linux workstation |
| **☁️ Cloud** | AWS, GCP, Azure instances |
| **🔧 Edge** | Routers, NAS devices, Edge servers |

### Starting a Universal Host

```bash
# Auto-detect device type
/hostdevice

# Specify port and device type
/hostdevice 8768 smartphone_high

# Output:
🏠 Universal Host started!
   Name: MyPhone_android
   Type: High-End Smartphone
   Port: 8768
   Capabilities: inference, training, embed
```

### Device Type Profiles

Each device type has optimized settings:

| Type | Inference | Training | Memory | Concurrent Tasks |
|------|-----------|----------|--------|------------------|
| `smartphone_high` | ✅ | ✅ | 4GB | 3 |
| `smartphone_mid` | ✅ | ❌ | 2GB | 2 |
| `smart_speaker` | ❌ | ❌ | 256MB | 1 (relay only) |
| `smart_display` | ✅ | ❌ | 1GB | 2 |
| `raspberry_pi` | ✅ | ✅ | 4GB | 2 |
| `jetson_nano` | ✅ | ✅ | 4GB | 4 (CUDA) |
| `desktop_high` | ✅ | ✅ | 32GB | 8 (GPU) |
| `server` | ✅ | ✅ | 128GB | 32 |

### Device Host Commands

| Command | Description |
|---------|-------------|
| `/hostdevice [port] [type]` | Start as universal host |
| `/stophost` | Stop hosting |
| `/hoststatus` | Show host status |
| `/discover` | Find hosts on network |
| `/connecthost <host:port>` | Connect to a host |
| `/devicetype [type]` | Set/show device type |
| `/powermode <mode>` | Set power mode |
| `/devicetypes` | List all device types |

### Power Modes

Adapt to power constraints automatically:

| Mode | Description |
|------|-------------|
| `performance` | Maximum speed, highest power |
| `balanced` | Balance speed and power |
| `power_save` | Minimize power usage |
| `ultra_low` | For battery-critical situations |

Devices automatically switch to power_save when battery is low.

### Device Discovery

Hosts automatically discover each other on the local network:

```bash
/discover

# Output:
🔍 Found 3 hosts:
  • MyPixel (smartphone_high) - 192.168.1.100:8768
  • LivingRoomTV (smart_tv) - 192.168.1.101:8768
  • HomeServer (server) - 192.168.1.102:8768
```

### Adaptive Task Scheduling

The scheduler intelligently distributes tasks based on:
- **Capability Match**: Best device for the task type
- **Load Balance**: Distribute work evenly
- **Power Aware**: Prefer plugged-in devices
- **Latency Optimized**: Fastest response time
- **Cost Optimized**: Minimize resource usage

### System Requirements (Desktop)

| Platform | Requirements |
|----------|-------------|
| **Windows** | Windows 10/11, x64 |
| **Linux** | Ubuntu 18.04+, Debian 10+, or similar x64 distro |
| **macOS** | macOS 10.15+ (Catalina or later), x64 or ARM64 |
| **All** | Node.js 18+ (for development), Ollama (optional, for local inference) |

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

## 🌐 P2P Networking

Share your LLM capabilities with others - perfect for group chats where only one device runs the AI:

```
You: /host
🌐 Room is now shared!
   Share code (LAN): MTkyLjE2OC4xLjEwMDo4NzY1OkFCQzEyMw==
   Others can join with: /join <code>

---

You: /join MTkyLjE2OC4xLjEwMDo4NzY1OkFCQzEyMw==
✅ Connected to remote room!
```

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
│                         │  │  │   ┌───────────────┐ │  │  ││
│                         │  │  │   │ Personalities │ │  │  ││
│                         │  │  │   │  🌟🎭🦉⚡🗺️   │ │  │  ││
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
- [x] **Phase 5: AI Personalities** - 10 unique AI personalities from Landseek
- [x] **Phase 6: Document Analysis** - 70+ file format support
- [x] **Phase 7: P2P Networking** - Host/Join rooms with share codes
- [x] **Phase 8: RAG Persistence** - Save/load memories and mind maps
- [x] **Phase 9: The Embedding** - Android build system with Gradle, Node.js bundling
- [x] **Phase 10: Release** - Build configuration and scripts ready

## 🔨 Build Instructions

### Quick Build (One Command)

```bash
./scripts/build_release.sh
```

### Manual Build

1. **Set up Node.js runtime:**
```bash
./scripts/setup_runtime.sh
```

2. **Bundle bridge code:**
```bash
./scripts/bundle_bridge.sh
```

3. **Build the APK:**
```bash
cd android
./gradlew assembleRelease
```

4. **Install on device:**
```bash
adb install app/build/outputs/apk/release/app-release.apk
```

### Build Requirements

- **JDK 17+** - Required for Gradle
- **Android SDK 34** - Target API level
- **Node.js** (host machine) - For installing bridge dependencies

### Signing for Release

To sign the APK for Play Store distribution:

1. Generate a keystore:
```bash
keytool -genkey -v -keystore amphibian.jks -keyalg RSA -keysize 2048 -validity 10000 -alias amphibian
```

2. Create `android/local.properties`:
```properties
sdk.dir=/path/to/android/sdk
storeFile=../amphibian.jks
storePassword=your_password
keyAlias=amphibian
keyPassword=your_password
```

3. Update `android/app/build.gradle` to use release signing config.

## 🔒 Security

- **Localhost Binding:** The Node server binds ONLY to `127.0.0.1` to prevent external access.
- **Token Auth:** WebSocket connections require a secret token passed from Android.
- **API Keys:** Keys stored in Android KeyStore, passed to Node process via Environment Variables.
- **Scoped Storage:** File access restricted to app sandbox by default.

## 📄 License
>>>>>>> 4c5759311cb24f1ac344ead8710b58458a0f5089

MIT
