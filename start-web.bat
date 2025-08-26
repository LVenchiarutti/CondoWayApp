@echo off
cd /d "%~dp0"
echo Instalando dependencias...
npm install --legacy-peer-deps
echo.
echo Iniciando servidor de desenvolvimento...
npm start
