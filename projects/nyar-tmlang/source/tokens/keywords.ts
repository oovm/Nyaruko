const keywords_raw = {
    module: [
        'using|as|expose'
    ],
    modifier: [
        'template|class',
        'new|instance',
    ],
    controllor: [
        'if|else',
        'switch',
        'for|in',
        'do|while',
        'with',
    ],
    null: ['null'],
    bool: ['true|false']
}

export const keywords = Object.entries(keywords_raw)
    .reduce((a: any, [k, v]: any) => (a[k] = v.join('|').split('|'), a), {})