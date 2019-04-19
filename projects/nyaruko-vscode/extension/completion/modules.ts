import * as vscode from 'vscode'
import { getSuggestions, wordContains } from '../utils'
import { Tokens } from '@nyar/tmlang'

const modules = Tokens.Modules


export function SuggestModules(word: string): Thenable<vscode.CompletionItem[]> {
    const show = vscode.CompletionItemKind.Module
    let cmd = new Promise((resolve, reject) => {
        resolve(modules.join('\n'))
    })
    function formatter(input: string) {
        return '"' + input + '"'
    }
    return getSuggestions(cmd, word, show, formatter, wordContains)
}
