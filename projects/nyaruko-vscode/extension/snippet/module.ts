import { AutoComplete } from '../utils'

const Module_Include = [
    {
        'prefix': 'Using Include Statement',
        'body': [
            'Using "${1:def}" Instance'
        ],
        'description': 'Using Definition Instance'
    }
]

const Module_Import = [
    {
        'prefix': 'Using Module Alias',
        'body': [
            'Using "${1:module}" As { $2 }'
        ],
        'description': 'Using module As alias'
    },
    {
        'prefix': 'Using Symbol Alias',
        'body': [
            'Using "${1:module}" With { $2 }'
        ],
        'description': 'Using some symbols from a module'
    },
    {
        'prefix': 'Using Module All',
        'body': [
            'Using "${1:module}" All'
        ],
        'description': 'Using some namespace'
    },
]

const Module_Export = [
    {
        'prefix': 'Exposing Module Symbol',
        'body': [
            'Exposing "{${0:symbol}}"'
        ],
        'description': 'Using module As alias'
    },
    {
        'prefix': 'Exposing Module Symbol',
        'body': [
            'Import "${1:module}" Of { $2 }'
        ],
        'description': 'Import (module1, module2) Of { symbol As alias }'
    }
]


export default AutoComplete.concat(
    Module_Include,
    Module_Import,
    Module_Export
)
