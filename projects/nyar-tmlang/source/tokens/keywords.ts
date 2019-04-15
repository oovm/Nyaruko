const keywords_raw = {
    module: [
        'using|as|expose'
    ],
    modifier: [
        'class|extend|implicate',
        'structure|interface|new|instance',
        'template',
        'macro'
    ],
    controllor: [
        'if|else',
        'switch|case',
        'for|in',
        'while',
        'with',
    ],
    null: ['null'],
    bool: ['true|false']
}

export const keywords = Object.entries(keywords_raw)
    .reduce((a: any, [k, v]: any) => (a[k] = v.join('|').split('|'), a), {})