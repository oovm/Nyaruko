export const If_Condition = [
    {
        prefix: 'If Statement',
        body: [
            'if (${1:condition}) {',
            '\t${2:true_then}',
            '}'
        ],
        description: 'If Statement'
    },
    {
        prefix: 'If-Else Statement',
        body: [
            'if (${1:condition}) {',
            '\t${2:true_then}',
            '}',
            'else {',
            '\tfalse_then',
            '}'
        ],
        description: 'If-Else Statement'
    },
    {
        prefix: 'Else-If Statement',
        body: [
            'else if (${1:condition}) {',
            '\t${2:true_then}',
            '}',
            'else {',
            '\tfalse_then',
            '}'
        ],
        description: 'If Condition\tTrue/False/Unknow'
    }
]

export const Switch_Condition = [
    {
        prefix: 'Switch Statement',
        body: [
            'switch (${1:cond}) {',
            '\tcase: $0,',
            '\tcase*:',
            '}'
        ],
        description: 'Switch Statement'
    }
]