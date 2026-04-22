$files = Get-ChildItem -Path "*.html"
foreach ($f in $files) {
    $content = Get-Content -Raw $f.FullName
    $pattern = '(?s)<style>.*?\.luxury-title\s*\{.*?</style>'
    if ($content -match $pattern) {
        $content = $content -replace $pattern, ""
        Set-Content -Path $f.FullName -Value $content
        Write-Host "Cleaned inline style from $($f.Name)"
    }
}
