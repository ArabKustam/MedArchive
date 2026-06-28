@echo off
title MedArchive - Ostanovka Serverov
echo ===================================================
echo   MedArchive - Ostanovka Serverov (Backend + Frontend)
echo ===================================================
echo.
echo Zavershenie processov na portah 8765 i 5173...

powershell -Command "Get-NetTCPConnection -LocalPort 8765,5173 -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique | ForEach-Object { Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue }" >nul 2>&1

for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8765 ^| findstr LISTENING') do (
    taskkill /f /pid %%a >nul 2>&1
)
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5173 ^| findstr LISTENING') do (
    taskkill /f /pid %%a >nul 2>&1
)

echo.
echo ===================================================
echo   Vse servery MedArchive uspechno ostanovleny!
echo ===================================================
ping 127.0.0.1 -n 3 > nul
