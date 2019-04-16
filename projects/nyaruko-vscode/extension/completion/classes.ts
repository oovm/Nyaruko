import * as vscode from 'vscode'
import { getSuggestions, wordContains } from '../utils'
import { Tokens } from '@nyar/tmlang'


const classes = Tokens.Classes


export function SuggestClasses(word: string): Thenable<vscode.CompletionItem[]> {
    const show = vscode.CompletionItemKind.Class
    let cmd = new Promise((resolve, reject) => {
        resolve(classes.join('\n'))
    })
    function formatter(input: string) {
        return input + '(${0})'
    }
    return getSuggestions(cmd, word, show, formatter, wordContains)
}