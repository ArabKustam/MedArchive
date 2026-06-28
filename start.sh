#!/usr/bin/env bash

# MedArchive - Alias to run.sh

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec "$PROJECT_DIR/run.sh" "$@"
