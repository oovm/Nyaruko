/*
function getKeyordSuggestions(word: string): Thenable<vscode.CompletionItem[]> {
    let cmd = getKeywordList()
    function insertKeyordText(word: string) {
        const snippets: any = {
            if: word + ' ${1} then\n\t\nend',
            for: word + ' ${1} in ${2} do\n\t\nend',
            while: word + ' ${1} do\n\t\nend',
            function: word + ' ${1}(${2}) \n\t\nend'
        }
        return snippets[word] ? snippets[word] : word + ' ${1}'
    }
    return getSuggestions(cmd, word, vscode.CompletionItemKind.Function, insertKeyordText, wordContains)
}
function getKeyordList(): Promise<string> {
    return new Promise(function (resolve, reject) {
        resolve(['if', 'function', 'for', 'local', 'else', 'elseif', 'then', 'end', 'nil', 'true', 'false', 'do', 'while'].join('\n'))
    })
}
*/