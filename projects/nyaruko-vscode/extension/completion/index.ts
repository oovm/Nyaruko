import * as vscode from 'vscode'
import { SuggestionClasses, Classes } from './classes'
import { SuggestionFunctions, Functions } from './function'
import { SuggestionKeywords, Keywords } from './keywords'
import { SuggestionMacros, Macros } from './macros'
import { Template_Keywords } from '../snippet/template'

export const NyarLanguage = {
    Macros: Macros,
    Keywords: Keywords,
    Classes: Classes.join('|').split('|'),
    Functions: Functions.join('|').split('|'),
    Template: Template_Keywords
}

// the option class
export class Completion implements vscode.CompletionItemProvider {
    // provide completion items
    public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.CompletionItem[]> {
        // get the current word
        let wordAtPosition = document.getWordRangeAtPosition(position)
        var currentWord = ''
        if (wordAtPosition && wordAtPosition.start.character < position.character) {
            var word = document.getText(wordAtPosition)
            currentWord = word.substr(0, position.character - wordAtPosition.start.character)
        }
        // get suggestion results
        return new Promise(function (resolve, reject) {
            Promise.all([
                SuggestionMacros(currentWord),
                SuggestionKeywords(currentWord),
                SuggestionClasses(currentWord),
                SuggestionFunctions(currentWord),
            ]).then(function (results) {
                var suggestions = Array.prototype.concat.apply([], results)
                resolve(suggestions)
            }).catch(err => { reject(err) })
        })
    }
    // resolve completion item
    public resolveCompletionItem(item: vscode.CompletionItem, token: vscode.CancellationToken): Thenable<vscode.CompletionItem> {
        return new Promise(function (resolve, reject) {
            // TODO: add documentation for this completion item
            item.documentation = 'add documentation for this completion item'
            resolve(item)
        })
    }
}