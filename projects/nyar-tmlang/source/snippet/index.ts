
import * as Modules from './module'
import * as Templates from './template'
import * as Classes from './class'
import * as Functions from './function'
import * as Conditions from './condition'
import * as Loops from './loop'
import * as Comments from './comment'



const snippets = Modules.default
    .concat(
        Templates.default,
        Classes.default,
        Functions.default,
        Conditions.default,
        Loops.default,
        Comments.default
    )
    .sort((a, b) => { return ('' + a.prefix).localeCompare(b.prefix) })

export let Snippet: any = {}
for (let i = 0; i < snippets.length; i++) {
    Snippet[snippets[i].prefix] = snippets[i]
}
