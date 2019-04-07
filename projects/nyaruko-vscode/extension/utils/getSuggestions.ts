import * as vscode from 'vscode'
export function getSuggestions(
    cmdlist: any,
    currentWord: string,
    kind: vscode.CompletionItemKind,
    insertText: any,
    matchPredicate: any
): Thenable<vscode.CompletionItem[]> {
    return new Promise(function (resolve, reject) {
        cmdlist.then(function (stdout: string) {
            // match suitable commands 
            let commands = stdout.split('\n').filter((cmd) => { return matchPredicate(cmd, currentWord) })
            if (commands.length > 0) {
                // make suggestions from commands
                let suggestions = commands.map(function (command_name) {
                    // make completion item
                    var item = new vscode.CompletionItem(command_name)
                    item.kind = kind
                    if (insertText === null || insertText === '') {
                        item.insertText = command_name
                    } else {
                        let snippet = new vscode.SnippetString(insertText(command_name))
                        item.insertText = snippet
                    }
                    return item
                })
                resolve(suggestions)
            }
            else {
                resolve([])
            }
        }).catch(
            (err: any) => { reject(err) }
        )
    })
}