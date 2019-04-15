import { Syntax } from './syntax'
import { functions, operators, keywords } from './tokens'

const Tokens = {
    Functions: [].concat.apply([], Object.values(functions)),
    operators: [].concat.apply([], Object.values(operators)),
    Keywords: [].concat.apply([], Object.values(keywords)),
}

export { Syntax, Tokens }