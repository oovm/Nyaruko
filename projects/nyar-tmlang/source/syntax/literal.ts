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
                match: '\\\\[\\$`"\\\\\\n]',
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
        match: '(?x)\n  (?<! \\w)(?:\n    (?:\n      \\.[0-9](?: _?[0-9] )*\n      |\n      [0-9](?: _?[0-9] )* \\. [0-9](?: _?[0-9] )*\n      |\n      [0-9](?: _?[0-9] )* \\.\n    ) (?: [eE][+-]?[0-9](?: _?[0-9] )* )?\n    |\n    [0-9](?: _?[0-9] )* (?: [eE][+-]?[0-9](?: _?[0-9] )* )\n  )([jJ])?\\b\n',
        captures: {
            1: {
                name: 'storage.type.imaginary.number.nyar'
            }
        }
    },
    {
        name: 'constant.numeric.integer.nyar',
        match: '(?x)\n  (?<![\\w\\.])(?:\n      [1-9](?: _?[0-9] )*\n      |\n      0+\n      |\n      [0-9](?: _?[0-9] )* ([jJ])\n      |\n      0 ([0-9]+)(?![eE\\.])\n  )\\b\n',
        captures: {
            1: {
                'name': 'storage.type.imaginary.number.nyar'
            },
            2: {
                'name': 'invalid.illegal.dec.nyar'
            },
            3: {
                'name': 'invalid.illegal.dec.nyar'
            }
        }
    },
]