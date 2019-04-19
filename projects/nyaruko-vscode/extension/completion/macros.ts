import * as vscode from 'vscode'
import { getSuggestions, wordContains } from '../utils'


export const Macros = ['Macro', 'Class', 'Template']


export function SuggestMacros(word: string): Thenable<vscode.CompletionItem[]> {
    const show = vscode.CompletionItemKind.Snippet
    let cmd = new Promise((resolve, reject) => {
        resolve(Macros.join('\n'))
    })
    function formatter(input: string) {
        return input
    }
    return getSuggestions(cmd, word, show, formatter, wordContains)
}
