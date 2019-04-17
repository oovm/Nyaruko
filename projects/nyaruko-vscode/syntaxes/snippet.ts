import { Syntax, Snippet } from '@nyar/tmlang'
import { writeFileSync } from 'fs'

writeFileSync(
    __dirname + '/nyar.snippet.json',
    JSON.stringify(Snippet, null, 4)
)

writeFileSync(
    __dirname + '/nyar.tmLanguage.json',
    JSON.stringify(Syntax, null, 4)
)
