import { Comments } from './comment'
import { Constants, Controlors, Modifiers } from './keyword'
import { Operators } from './operator'

interface patterns {
    name: string
    match?: string
    begin?: string
    end?: string
}

let cases: patterns[] = Comments

export const Syntax = {
    scopeName: 'source.nyar',
    version: 'v0.0.1',
    uuid: '',
    information_for_contributors: [],
    patterns: cases
        .concat([Constants, Controlors, Modifiers])
        .concat(Operators)
        .sort((a, b) => { return ('' + a.name).localeCompare(b.name) })
}
console.log(Syntax)