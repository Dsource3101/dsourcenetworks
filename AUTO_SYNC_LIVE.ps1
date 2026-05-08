$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = Get-Location
$watcher.Filter = "*.*"
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

Write-Host "=========================================" -ForegroundColor Gold
Write-Host "   AUTO-SYNC IS ACTIVE!                  " -ForegroundColor Gold
Write-Host "   Watching for changes in: $($watcher.Path)"
Write-Host "   Keep this window open to stay synced. "
Write-Host "=========================================" -ForegroundColor Gold

$lastWriteTime = Get-Date

$action = {
    $now = Get-Date
    # Simple debounce to prevent multiple triggers
    if ($now -gt (Get-Variable -Name lastWriteTime -Scope Global).Value.AddSeconds(5)) {
        Set-Variable -Name lastWriteTime -Value $now -Scope Global
        Write-Host "`n[$(Get-Date -Format 'HH:mm:ss')] Change detected. Syncing to GitHub..." -ForegroundColor Cyan
        
        git add .
        git commit -m "Auto-sync update - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        git push origin main
        
        Write-Host "SUCCESS: Changes are now live on GitHub!" -ForegroundColor Green
        Write-Host "Note: It may take 30-60 seconds for the browser to show the update." -ForegroundColor Gray
    }
}

Register-ObjectEvent $watcher "Changed" -Action $action | Out-Null
Register-ObjectEvent $watcher "Created" -Action $action | Out-Null

while($true) { Start-Sleep -Seconds 1 }
