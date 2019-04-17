import { AutoComplete } from '../../../nyaruko-vscode/extension/utils'

const If_Condition = [
    {
        'prefix': 'If Statement',
        'body': [
            'if (${1:condition}) {',
            '\t${2:true_then}',
            '}'
        ],
        'description': 'If Statement'
    },
    {
        'prefix': 'If-Else Statement',
        'body': [
            'if (${1:condition}) {',
            '\t${2:true_then}',
            '}',
            'else {',
            '\tfalse_then',
            '}'
        ],
        'description': 'If-Else Statement'
    },
    {
        'prefix': 'Else-If Statement',
        'body': [
            'else if (${1:condition}) {',
            '\t${2:true_then}',
            '}',
            'else {',
            '\tfalse_then',
            '}'
        ],
        'description': 'If Condition\tTrue/False/Unknow'
    }
]

const Switch_Condition = [
    {
        'prefix': 'Switch Statement',
        'body': [
            'switch (${1:expr}) {',
            '\t${2:case1},',
            '\tdo something',
            '\t*,',
            '\tdo default',
            '}'
        ],
        'description': 'Switch Statement'
    }
]

export default AutoComplete.concat(
    If_Condition,
    Switch_Condition
)
