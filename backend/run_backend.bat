@echo off
cd /d "%~dp0"
if exist "%~dp0..\consummate-sled-493518-m6-4c991329b233.json" (
    set "GOOGLE_APPLICATION_CREDENTIALS=%~dp0..\consummate-sled-493518-m6-4c991329b233.json"
)
echo Starting MedArchive Backend on port 8765 (Host 0.0.0.0)...
if exist .venv\Scripts\python.exe (
    .venv\Scripts\python.exe -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8765
) else (
    python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8765
)
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Backend failed to start or stopped with error.
    pause
)
