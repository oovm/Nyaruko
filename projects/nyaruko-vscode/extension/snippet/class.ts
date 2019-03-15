import { Base } from './share'
const Class_Declear = [
    {
        'prefix': 'Class Define Statement',
        'body': [
            'Class ${1:name} {',
            '\tself=${1:name}',
            '}'
        ],
        'description': 'Class cs_name {}'
    },
    {
        'prefix': 'Class Extends Statement',
        'body': [
            'Class ${1:name} Extend ${2:father} {',
            '\tself=${1:name}',
            '\tsuper=${2:father}',
            '}',
        ],
        'description': 'Class cs_name {}'
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
        'description': 'Class cs_name {}'
    },
]

const Class_Property = [
    {
        'prefix': 'Property Getter',
        'body': [
            'Getter (self*) {',
            '\tget() := return(self)',
            '}'
        ],
        'description': 'Property getter'
    },
    {
        'prefix': 'Property Setter',
        'body': [
            'Setter (self*) {',
            '\tset() := $2;',
            '}'
        ],
        'description': 'Property setter'
    },
    {
        'prefix': 'Property Setter',
        'body': [
            'Printer (self*) {',
            '\tset() := $2;',
            '}'
        ],
        'description': 'Property setter'
    },
]



export default Base.concat(
    Class_Declear,
    Class_Property
)