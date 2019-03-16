#!
cd projects/nyaruko-vscode
ls -l
yarn build
cp -rf dist ~/.vscode/extensions/nyaruko-vscode/dist
cp -rf syntaxes ~/.vscode/extensions/nyaruko-vscode/syntaxes
cd ~/.vscode/extensions/nyaruko-vscode
ls -l