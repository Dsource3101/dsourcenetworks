@echo off
echo =========================================
echo   SYNCING YOUR CHANGES TO GITHUB...
echo =========================================
git add .
git commit -m "Manual sync and open website"
git push origin main

echo.
echo =========================================
echo   SUCCESS! OPENING GITHUB LINK...
echo   (Wait 30 seconds for GitHub to refresh)
echo =========================================
start https://dsource3101.github.io/dsourcenetworks/
pause
