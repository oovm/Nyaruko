import { AutoComplete } from '../utils'
const Class_Declear = [
    {
        'prefix': 'Class Declare Statement',
        'body': [
            'Class ${1:name} {',
            '\tself=${1:name}',
            '}'
        ],
        'description': 'Declare a Class'
    },
    {
        'prefix': 'Class Extend Statement',
        'body': [
            'Class ${1:name} Extend ${2:father} {',
            '\tself=${1:name}',
            '\tsuper=${2:father}',
            '}',
        ],
        'description': 'Extend a Class'
    },
    {
        'prefix': 'Class Mixin Statement',
        'body': [
            'Class ${1:name} Mixin ${2:father} ${3:relative} {',
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
            'Getter {',
            '\tget() := return(self)',
            '}'
        ],
        'description': 'Property getter'
    },
    {
        'prefix': 'Property Setter',
        'body': [
            'Setter {',
            '\tset() := $2;',
            '}'
        ],
        'description': 'Property setter'
    },
    {
        'prefix': 'Property Setter',
        'body': [
            'Overloader {',
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