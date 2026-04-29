@echo off
echo =========================================
echo   Uploading Website Updates to GitHub...
echo =========================================
echo.

git add .
git commit -m "Update website"
git push -u origin main

echo.
echo =========================================
echo   Done! Check your GitHub page.
echo =========================================
pause
