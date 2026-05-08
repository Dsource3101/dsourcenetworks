@echo off
echo =========================================
echo   Syncing Website to GitHub...
echo =========================================
echo.

echo 1. Staging changes...
git add .
echo.

echo 2. Committing changes...
git commit -m "Update website: %date% %time%"
echo.

echo 3. Pushing to GitHub...
git push -u origin main
echo.

echo =========================================
echo   Sync Complete! Opening live site...
echo =========================================
start https://dsource3101.github.io/dsourcenetworks/
echo.
pause
