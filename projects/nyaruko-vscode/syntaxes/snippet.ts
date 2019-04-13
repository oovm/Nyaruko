import { Syntax } from '@nyar/tmlang'
import * as Modules from '../extension/snippet/module'
import * as Templates from '../extension/snippet/template'
import * as Classes from '../extension/snippet/class'
import * as Functions from '../extension/snippet/function'
import * as Conditions from '../extension/snippet/condition'
import * as Loops from '../extension/snippet/loop'
import * as Comments from '../extension/snippet/comment'

import { writeFileSync } from 'fs'

/*
const Snippets = Modules.default
    .concat(
        Templates.default,
        Classes.default,
        Functions.default,
        Conditions.default,
        Loops.default,
        Comments.default
    )
    .sort((a, b) => { return ('' + a.prefix).localeCompare(b.prefix) } )

let snippet: any = {}
for (let i = 0; i < Snippets.length; i++) {
    snippet[Snippets[i].prefix] = Snippets[i]
}

writeFileSync(
    __dirname + '/nyar.snippet.json',
    JSON.stringify(snippet, null, 4)
)
*/

writeFileSync(
    __dirname + '/nyar.tmLanguage.json',
    JSON.stringify(Syntax, null, 4)
)
