const Conditions: {
    'prefix': string;
    'body': string[];
    'description': string;
}[] = []

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
        'prefix': 'If-Else-Otherwise Statement',
        'body': [
            'if (${1:condition}) {',
            '\t${2:true_then}',
            '}',
            'else {',
            '\tfalse_then',
            '}',
            'otherwise {',
            '\tunknow_then',
            '}'
        ],
        'description': 'If Condition\tTrue/False/Unknow'
    }
]

export default Conditions.concat(
    If_Condition
)
