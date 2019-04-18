
import * as Modules from './module'
import * as Classes from './class'
import * as Functions from './function'
import * as Conditions from './condition'
import * as Loops from './loop'
import * as Comments from './comment'

export const AutoComplete: {
    prefix: string
    body: string[]
    description: string
}[] = []

const snippets = AutoComplete
    .concat(
        Modules.Module_Include,
        Modules.Module_Import,
        Modules.Module_Export,
        Classes.Class_Declear,
        Classes.Class_Property,
        Functions.Function,
        Conditions.If_Condition,
        Conditions.Switch_Condition,
        Loops.Do_Loop,
        Loops.For_Loop,
        Loops.With_Loop,
        Comments.Comment,
    )
    .sort((a, b) => { return ('' + a.prefix).localeCompare(b.prefix) })

export let Snippet: any = {}
for (let i = 0; i < snippets.length; i++) {
    Snippet[snippets[i].prefix] = snippets[i]
}
