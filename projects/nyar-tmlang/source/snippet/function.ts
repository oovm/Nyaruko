import { AutoComplete } from '../../../nyaruko-vscode/extension/utils'
const Function = [
    {
        'prefix': 'Function Statement',
        'body': [
            '${1:name}::Auto => Auto',
            '${1:name}(${2:var}) := {',
            '\t$0',
            '\treturn()',
            '}'
        ],
        'description': 'Function Statement'
    },
    {
        'prefix': 'Log to the console',
        'body': [
            'console.log($1);',
            '$0'
        ],
        'description': 'Log to the console'
    },
    {
        'prefix': 'Throw Exception',
        'body': [
            'throw "$1";',
            '$0'
        ],
        'description': 'Throw Exception'
    },
    {
        'prefix': 'Try-Catch Statement',
        'body': [
            'try (',
            '\t$0',
            ')',
            'catch(${1:error}) { ',
            '\t',
            '}'
        ],
        'description': 'Try-Catch Statement'
    }
]

export default Function