#!/bin/bash
# Landseek-Amphibian - Start the desktop app
# Run ./setup.sh first if this is a fresh clone.

set -e

ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Auto-install if node_modules missing
if [ ! -d "$ROOT_DIR/bridge/node_modules" ] || [ ! -d "$ROOT_DIR/desktop/node_modules" ]; then
    echo "  Dependencies not installed. Running setup..."
    bash "$ROOT_DIR/setup.sh"
fi

cd "$ROOT_DIR/desktop"
exec node main.js "$@"
