#!/usr/bin/env bash

# MedArchive - Quick Start Script for macOS / Linux

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

echo "==================================================="
echo "  MedArchive — Запуск серверов (Backend + Frontend)"
echo "==================================================="
echo ""

# 0. Остановка старых процессов на портах 8765 и 5173
if [ -f "$PROJECT_DIR/stop.sh" ]; then
    bash "$PROJECT_DIR/stop.sh" > /dev/null 2>&1
fi

# Проверка Google Application Credentials
if [ -f "$PROJECT_DIR/consummate-sled-493518-m6-4c991329b233.json" ]; then
    export GOOGLE_APPLICATION_CREDENTIALS="$PROJECT_DIR/consummate-sled-493518-m6-4c991329b233.json"
fi

# 1. Запуск Backend
echo "[1/2] Запуск Backend (Порт 8765)..."
cd "$PROJECT_DIR/backend"
if [ -d ".venv" ]; then
    PYTHON_BIN=".venv/bin/python"
elif command -v python3 &> /dev/null; then
    PYTHON_BIN="python3"
else
    PYTHON_BIN="python"
fi

$PYTHON_BIN -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8765 &
BACKEND_PID=$!

# 2. Запуск Frontend
echo "[2/2] Запуск Frontend (Порт 5173)..."
cd "$PROJECT_DIR"
if command -v bun &> /dev/null; then
    bun dev &
else
    npm run dev &
fi
FRONTEND_PID=$!

cleanup() {
    echo ""
    echo "Остановка серверов..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    if [ -f "$PROJECT_DIR/stop.sh" ]; then
        bash "$PROJECT_DIR/stop.sh" > /dev/null 2>&1
    fi
    exit 0
}

trap cleanup INT TERM

echo ""
echo "==================================================="
echo "  Оба сервера успешно запущены!"
echo "  Backend:  http://localhost:8765 (Docs: http://localhost:8765/docs)"
echo "  Frontend: http://localhost:5173"
echo "==================================================="
echo ""
echo "Для остановки серверов нажмите Ctrl+C или запустите ./stop.sh"
echo ""

wait $BACKEND_PID $FRONTEND_PID
