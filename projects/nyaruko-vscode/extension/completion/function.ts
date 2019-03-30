import * as vscode from 'vscode'
import { getSuggestions, wordContains } from '../utils'
import { Agent } from 'https'
const show = vscode.CompletionItemKind.Function
function formatter(func: string) {
    return func + '(${1})'
}
const math_basic = [
    'add|minus|times|divide|mod',
    'sin|cos|tan|cot|sec|csc',
    'arcsin|arccos|arctan|arccot|arcsec|arccsc',
    'sqrt|power|exp|log',
    'mod|remainder|quotient',
    'abs|arg|real|imaginary|conjugate',
    'lcm|gcd|gcd_extand,'
]
const math_advance = [
    'solve|integrate|tr'
]
const loop_basic = [
    'range',
    'table', 'repeat'
]
const io_basic = [
    'print',
    'import', 'export',
    'import_string', 'export_string',
    'import_bype', 'export_byte'
]
const class_basic = [
    'print',
    'import', 'export',
    'import_string', 'export_string',
    'import_bype', 'export_byte'
]


export const Functions = [
    math_basic, loop_basic, io_basic, class_basic,
    math_advance
].map(x => x.join('|'))
export function SuggestionFunctions(word: string): Thenable<vscode.CompletionItem[]> {
    let cmd = new Promise(function (resolve, reject) {
        resolve(Functions.join('|').split('|').join('\n'))
    })
    return getSuggestions(cmd, word, show, formatter, wordContains)
}


