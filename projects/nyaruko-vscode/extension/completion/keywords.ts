import * as vscode from 'vscode'
import { getSuggestions, wordContains } from '../utils'
const show = vscode.CompletionItemKind.Function
export const Keywords = [
    'true|false|Auto|null',
    'if|else',
    'class|extend|mixin|init|',
    'public|private'
]


export function SuggestionKeywords(word: string): Thenable<vscode.CompletionItem[]> {
    let cmd = new Promise(
        (resolve, reject) => {
            resolve(Keywords.join('|').split('|').join('\n'))
        }
    )
    function insertCommandText(func: string) {
        return func
    }
    return getSuggestions(cmd, word, show, insertCommandText, wordContains)
}
