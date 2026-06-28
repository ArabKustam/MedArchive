#!/usr/bin/env bash

# MedArchive - Stop Servers Script for macOS / Linux

echo "Остановка серверов MedArchive..."

lsof -ti:8765 | xargs kill -9 2>/dev/null
lsof -ti:5173 | xargs kill -9 2>/dev/null

echo "Серверы MedArchive успешно остановлены."
