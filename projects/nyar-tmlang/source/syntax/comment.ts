export const Comments = [
    {
        name: 'comment.nyar',
        begin: '(^|\\G)(\\s*)(%{3,})\\s*(?=([^%]*)?$)',
        end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
        beginCaptures: {
            3: {
                name: 'punctuation.definition.comment'
            },
            4: {
                name: 'punctuation.definition.comment'
            }
        },
        endCaptures: {
            3: {
                name: 'punctuation.definition.comment'
            }
        },
        patterns: [
            {
                include: 'text.html.markdown'
            }
        ]
    },
    {
        name: 'comment.document.nyar',
        begin: '(^|\\G)(\\s*)(%{3,})\\s*(?i:(doc)(\\s+[^%]*)?$)',
        end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
        beginCaptures: {
            3: {
                name: 'punctuation.definition.comment'
            },
            4: {
                name: 'punctuation.block.language'
            },
            5: {
                name: 'comment.document.attributes.nyar'
            },
            6: {
                name: 'comment.document.attributes.nyar'
            }
        },
        endCaptures: {
            3: {
                name: 'punctuation.definition.comment'
            }
        },
        patterns: [
            {
                begin: '(^|\\G)(\\s*)(.*)',
                while: '(^|\\G)(?!\\s*([%]{3,})\\s*$)',
                contentName: 'meta.embedded.document.markdown',
                patterns: [
                    {
                        include: 'text.html.markdown'
                    }
                ]
            }
        ]
    }
]