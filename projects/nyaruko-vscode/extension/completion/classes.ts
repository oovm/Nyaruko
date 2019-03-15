import * as vscode from 'vscode'
import { getSuggestions, wordContains } from '../utils'
const show = vscode.CompletionItemKind.Class
function class_formatter(func: string) {
    return '${1:var} = ' + func + '(${2})'
}
const math = [
    'Bin|Oct|Hex|Complex',
    'Polygon|Graph|List|Graphics|Polynomial|Group|Cycle',
    'Tensor'
]
const media = [
    'String|Image|Music|Date'
]
const io = [
    'Stream|File|URL'
]
export const Classes = [
    math, media, io
].map(x => x.join('|'))

export function SuggestionClasses(word: string): Thenable<vscode.CompletionItem[]> {
    let cmd = new Promise(function (resolve, reject) {
        resolve(Classes.join('|').split('|').join('\n'))
    })
    return getSuggestions(cmd, word, show, class_formatter, wordContains)
}