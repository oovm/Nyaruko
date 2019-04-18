export const Module_Include = [
    {
        prefix: 'Using Include Statement',
        body: [
            'using "${1:def}" ^'
        ],
        description: 'Using Definition Instance'
    }
]

export const Module_Import = [
    {
        prefix: 'Using Module Alias',
        body: [
            'using "${1:module}" as { $2 }'
        ],
        description: 'Using module as alias'
    },
    {
        prefix: 'Using Symbol Alias',
        body: [
            'using "${1:module}" with { $2 }'
        ],
        description: 'Using some symbols from a module'
    },
    {
        prefix: 'Using Module All',
        body: [
            'using "${1:module}" *'
        ],
        description: 'Using some namespace'
    },
]

export const Module_Export = [
    {
        prefix: 'Exposing Module Symbol',
        body: [
            'expose "{${0:symbol}}"'
        ],
        description: ''
    },
    {
        prefix: 'Exposing Module Symbol',
        body: [
            'expose "${1:module}" of { $2 }'
        ],
        description: ''
    }
]