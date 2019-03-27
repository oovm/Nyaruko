import { Comments } from './comment'
import { Constants, Controlors, Modifiers } from './keywords'


interface patterns {
    name: string
    match?: string
    begin?: string
    end?: string
}

let cases: patterns[] = Comments

export const Syntax = {
    'scopeName': 'source.nyar',
    'version': 'v0.0.0',
    'uuid': '',
    'information_for_contributors': [],
    'patterns': cases
        .concat(
            [Constants, Controlors, Modifiers]
        )
        .sort(
            (a, b) => { return ('' + a.name).localeCompare(b.name) }
        )
}
