@echo off
echo =========================================
echo   Step 1: Clearing old GitHub logins...
echo =========================================
cmdkey /delete:LegacyGeneric:target=git:https://github.com
echo.
echo =========================================
echo   Step 2: Uploading to GitHub...
echo =========================================
echo.

git add .
git commit -m "Update website"
git push -u origin main

echo.
echo =========================================
echo   Done! Opening your live website...
echo =========================================
start https://dsource3101.github.io/dsourcenetworks/
pause
