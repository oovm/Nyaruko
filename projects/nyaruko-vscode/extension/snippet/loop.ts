import { AutoComplete } from '../utils'

const For_Loop = [
    {
        'prefix': 'For Range Loop',
        'body': [
            'for $1 in range($2) {',
            '\t$0',
            '}'
        ],
        'description': 'For a In range(b){f(a)}'
    }
]



const Do_Loop = [
    {
        'prefix': 'Do-While Statement',
        'body': [
            'do {',
            '\t$0',
            '} while (${1:condition});'
        ],
        'description': 'Do-While Statement'
    },
]

const With_Loop = [
    {
        'prefix': 'With Statement',
        'body': [
            'with ${1:symbol} as ${2:alias} {',
            '\t$0',
            '}'
        ],
        'description': 'While Statement'
    },
]



export default AutoComplete.concat(
    For_Loop,
    Do_Loop,
    With_Loop
)


