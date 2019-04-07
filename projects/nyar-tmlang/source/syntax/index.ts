import { Comments } from './comment'
import { Constants, Controlors, Modifiers } from './keywords'
import { AssignOperators, BasicOperators } from './operator'

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
        //.concat([AssignOperators, BasicOperators])
        .sort((a, b) => { return ('' + a.name).localeCompare(b.name) })
}
