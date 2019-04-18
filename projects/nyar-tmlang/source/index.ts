import { Syntax } from './syntax'
import { Snippet } from './snippet'
import { functions, operators, keywords, build_in } from './tokens'

const Tokens = {
    Functions: [].concat.apply([], Object.values(functions)),
    Operators: [].concat.apply([], Object.values(operators)),
    Keywords: [].concat.apply([], Object.values(keywords)),
    Modules: build_in.module,
    Classes: build_in.class,
}

export { Syntax, Tokens, Snippet }