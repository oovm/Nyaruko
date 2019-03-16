import * as vscode from 'vscode'
import { getSuggestions, wordContains } from '../utils'
const show = vscode.CompletionItemKind.Function
export const Keywords = [
    'True|False|Auto|Null',
    'If|Else|Otherwise',
    'Class|Extend|Mixin|Constructor|',
    'Public|Private'
]


export function SuggestionKeywords(word: string): Thenable<vscode.CompletionItem[]> {
    let cmd = new Promise(function (resolve, reject) {
        resolve(Keywords.join('|').split('|').join('\n'))
    })
    function insertCommandText(func: string) {
        return func
    }
    return getSuggestions(cmd, word, show, insertCommandText, wordContains)
}