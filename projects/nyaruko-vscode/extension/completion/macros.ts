import * as vscode from 'vscode'
import { getSuggestions, wordContains } from '../utils'
const show = vscode.CompletionItemKind.Snippet
function formatter(text: string) {
    return text
}

export const Macros = ['Macro', 'Class', 'Template']

export function SuggestionMacros(word: string): Thenable<vscode.CompletionItem[]> {
    let cmd = new Promise(function (resolve, reject) {
        resolve(Macros.join('\n'))
    })
    return getSuggestions(cmd, word, show, formatter, wordContains)
}
