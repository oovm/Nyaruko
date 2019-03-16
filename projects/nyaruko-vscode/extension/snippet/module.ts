import { Base } from './share'

const Module_Include = [
    {
        'prefix': 'Include Statement',
        'body': [
            'Import "${1:def}" Instance'
        ],
        'description': 'Import Definition Instance'
    }
]

const Module_Import = [
    {
        'prefix': 'Import Module Alias',
        'body': [
            'Import "${1:module}" As { $2 }'
        ],
        'description': 'Import module As alias'
    },
    {
        'prefix': 'Import Symbol Alias',
        'body': [
            'Import "${1:module}" Of { $2 }'
        ],
        'description': 'Import (module1, module2) Of { symbol As alias }'
    },
    {
        'prefix': 'Import Symbol All',
        'body': [
            'Import "${1:module}" All'
        ],
        'description': 'Import all symbol in module1'
    },
]


export default Base.concat(
    Module_Include,
    Module_Import
)
