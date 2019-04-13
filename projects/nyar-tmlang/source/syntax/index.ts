import { Comments } from './comment'
import { Keywords } from './keyword'
import { Operators } from './operator'
import { StringLiteral, NumberLiteral } from './literal'

interface patterns {
    name: string
    match?: string
    begin?: string
    end?: string
    beginCaptures?: any
    endCaptures?: any
    patterns?: any[]
}

let cases: patterns[] = Comments

export const Syntax = {
    scopeName: 'source.nyar',
    version: 'v0.0.1',
    uuid: '',
    information_for_contributors: [
        'aster: galaster@foxmail.com'
    ],
    patterns: cases
        .concat(Keywords, Operators)
        .concat(StringLiteral, NumberLiteral)
        .sort((a, b) => { return ('' + a.name).localeCompare(b.name) })
}
console.log(Syntax)