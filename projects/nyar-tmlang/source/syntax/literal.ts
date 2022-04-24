export const StringLiteral = [
    {
        begin: "'",
        beginCaptures: {
            0: {
                name: 'punctuation.definition.string.begin.nyar'
            }
        },
        end: "'",
        endCaptures: {
            0: {
                name: 'punctuation.definition.string.end.nyar'
            }
        },
        name: 'string.quoted.single.nyar'
    },
    {
        begin: '\\$?"',
        beginCaptures: {
            0: {
                name: 'punctuation.definition.string.begin.nyar'
            }
        },
        end: '"',
        endCaptures: {
            0: {
                name: 'punctuation.definition.string.end.nyar'
            }
        },
        name: 'string.quoted.double.nyar',
        patterns: [
            {
                match: '\\\\[\\$`"\\\\\]',
                name: 'constant.character.escape.nyar'
            },
            {
                include: '#variable'
            },
            {
                include: '#interpolation'
            }
        ]
    },
    {
        begin: "\\$'",
        beginCaptures: {
            0: {
                name: 'punctuation.definition.string.begin.nyar'
            }
        },
        end: "'",
        endCaptures: {
            0: {
                name: 'punctuation.definition.string.end.nyar'
            }
        },
        name: 'string.quoted.single.dollar.nyar',
        patterns: [
            {
                match: "\\\\(a|b|e|f|n|r|t|v|\\\\|')",
                name: 'constant.character.escape.ansi-c.nyar'
            },
            {
                match: '\\\\[0-9]{3}',
                name: 'constant.character.escape.octal.nyar'
            },
            {
                match: '\\\\x[0-9a-fA-F]{2}',
                name: 'constant.character.escape.hex.nyar'
            },
            {
                match: '\\\\c.',
                name: 'constant.character.escape.control-char.nyar'
            }
        ]
    }

]

export const NumberLiteral = [
    {
        name: 'constant.numeric.float.nyar',
        match: '(?x)(?<!\\w)(?:(?:\\.[0-9](?:_?[0-9])*|[0-9](?:_?[0-9])*\\.[0-9](?:_?[0-9])*|[0-9](?:_?[0-9])*\\.)(?:[eE][+-]?[0-9](?:_?[0-9])*)?|[0-9](?:_?[0-9])*(?:[eE][+-]?[0-9](?:_?[0-9])*))([jJ])?\\b',
        captures: {
            1: {
                name: 'storage.type.imaginary.number.nyar'
            }
        }
    },
    {
        name: 'constant.numeric.integer.nyar',
        match: '(?x)(?<![\\w\\.])(?:[1-9](?:_?[0-9])*|0+|[0-9](?:_?[0-9])*([jJ])|0([0-9]+)(?![eE\\.]))\\b',
        captures: {
            1: {
                name: 'storage.type.imaginary.number.nyar'
            },
            2: {
                name: 'invalid.illegal.dec.nyar'
            },
            3: {
                name: 'invalid.illegal.dec.nyar'
            }
        }
    },
]


export const SymbolLiteral = [
    {
        name: 'variable.other.readwrite.nyar',
        match: '\\b([a-zA-Z_]*)\\b',
    },
    /*
    {
        name: 'entity.name.function.nyar',
        begin: '(?x)\\b(?=([[:alpha:]_]\\w*)\\s*(\\())',
        end: '(\\))',
        endCaptures: {
            1: {
                name: 'punctuation.definition.arguments.end.nyar'
            }
        },
    },
    */
]


export const MagicLiteral = [
    {
        name: 'support.magic.nyar',
        match: '\\b(__(?:[0-9a-zA-Z_])__)\\b',
    }
]


export const Head = {
    "name": "Valkyrie",
    "scopeName": "source.nyar",
    "version": "v0.0.1",
    "uuid": "",
    "information_for_contributors": [
        "aster: galaster@foxmail.com"
    ],
    "firstLineMatch": "^#!/.*\\b\\w*nyar\\b",
    "foldingStartMarker": "/\\*\\*|\\{\\s*$",
    "foldingStopMarker": "\\*\\*/|^\\s*\\}",
    "keyEquivalent": "^~S",
    "fileTypes": [
        "nyar"
    ],
    "patterns": [
        {
            "include": "#code"
        }
    ],
    }