# Define directories and file extensions to include
$directoriesToSearch = @("public", "src")
$fileExtensions = "*.jsx", "*.js", "*.ts", "*.java", "*.css", "*.json"
$outputFile = "C:\Users\sanju\uniconnects\combined_files.txt"

# Clear content of output file
Clear-Content -Path $outputFile -ErrorAction SilentlyContinue

# Loop through each directory and file type, and append content to output file
foreach ($dir in $directoriesToSearch) {
    foreach ($extension in $fileExtensions) {
        $files = Get-ChildItem -Path "C:\Users\sanju\uniconnects\$dir" -Recurse -Include $extension -File
        foreach ($file in $files) {
            "### File: $($file.FullName)" | Out-File -FilePath $outputFile -Append
            Get-Content -Path $file.FullName | Out-File -FilePath $outputFile -Append
            "`n" | Out-File -FilePath $outputFile -Append  # Add new line separator
        }
    }
}
