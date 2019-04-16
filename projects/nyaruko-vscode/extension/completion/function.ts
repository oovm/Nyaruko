import * as vscode from 'vscode'
import { getSuggestions, wordContains } from '../utils'
import { Tokens } from '@nyar/tmlang'


export function SuggestFunctions(word: string): Thenable<vscode.CompletionItem[]> {
    const show = vscode.CompletionItemKind.Function
    let cmd = new Promise((resolve, reject) => {
        resolve(Tokens.Functions.join('\n'))
    })
    function formatter(input: string) {
        return input + '($0)'
    }
    return getSuggestions(cmd, word, show, formatter, wordContains)
}
