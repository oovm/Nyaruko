import { operators } from '../tokens'
export const Operators = [
    {
        name: 'keyword.operator.arithmetic.nyar',
        match: '(?x)(' + operators.basic.join('|') + ')',
    },
    {
        name: 'keyword.operator.comparison.nyar',
        match: '(?x)(' + operators.compare.join('|') + ')',
    },
    {
        name: 'keyword.operator.assignment.nyar',
        match: '(?x)(' + operators.assign.join('|') + ')',
    },
    {
        name: 'keyword.operator.assignment.lazy.nyar',
        match: '(?x)(' + operators.lazy_assign.join('|') + ')',
    },
    {
        name: 'keyword.operator.assignment.type.nyar',
        match: '(?x)(' + operators.type_assign.join('|') + ')',
    }
]