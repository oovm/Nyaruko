import { AutoComplete } from '../utils'
const Class_Declear = [
    {
        'prefix': 'Class Declare Statement',
        'body': [
            'class ${1:name} {',
            '\tself=${1:name}',
            '}'
        ],
        'description': 'Declare a Class'
    },
    {
        'prefix': 'Class Extend Statement',
        'body': [
            'class ${1:name} extend ${2:father} {',
            '\tself=${1:name}',
            '\tsuper=${2:father}',
            '}',
        ],
        'description': 'Extend a Class'
    },
    {
        'prefix': 'Class Mixin Statement',
        'body': [
            'class ${1:name} mixin ${2:father} ${3:relative} {',
            '\tself=${1:name}',
            '\tsuper=${2:father}',
            '\tmixin=${3:relative}',
            '}',
        ],
        'description': 'Mixin Classes'
    },
]

const Class_Property = [
    {
        'prefix': 'Property Getter',
        'body': [
            'getter {',
            '\tget() := return(self)',
            '}'
        ],
        'description': 'Property getter'
    },
    {
        'prefix': 'Property Setter',
        'body': [
            'setter {',
            '\tset() := $2;',
            '}'
        ],
        'description': 'Property setter'
    },
    {
        'prefix': 'Property Setter',
        'body': [
            'overloader {',
            '\tset() := $2;',
            '}'
        ],
        'description': 'Property setter'
    },
]



export default AutoComplete.concat(
    Class_Declear,
    Class_Property
)