cd "../projects/nyaruko-vscode"
xcopy /E "dist" "%USERPROFILE%\.vscode\extensions\nyaruko-vscode\dist" /y
xcopy /E "syntaxes" "%USERPROFILE%\.vscode\extensions\nyaruko-vscode\syntaxes" /y
cd "%USERPROFILE%\.vscode\extensions\nyaruko-vscode\dist"
dir