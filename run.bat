@echo off
title MedArchive - Control Center
echo ===================================================
echo   MedArchive - Zapusk Serverov (Backend + Frontend)
echo ===================================================
echo.

echo [0/2] Ochistka staryh processov...
call "%~dp0stop.bat" >nul 2>&1

echo [1/2] Zapusk Backend (Port 8765)...
start "MedArchive Backend" cmd /k "%~dp0backend\run_backend.bat"

echo [2/2] Zapusk Frontend (Port 5173)...
start "MedArchive Frontend" cmd /k "cd /d %~dp0 && npm run dev"

echo.
echo ===================================================
echo   Oba servera uspechno zapusheny!
echo   Backend:  http://localhost:8765 (Docs: http://localhost:8765/docs)
echo   Frontend: http://localhost:5173
echo ===================================================
echo.
echo Dlya ostanovki vseh serverov nazhmite lyubuyu klavishu v etom okne
echo ili zapustite stop.bat
echo.
pause

call "%~dp0stop.bat"

