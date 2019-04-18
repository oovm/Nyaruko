const keywords_raw = {
    module: [
        'using|as|expose'
    ],
    modifier: [
        'class|extend|implicate',
        'structure|interface|new|instance',
        'public|private|protect',
        'define|function',
        'template',
        'macro'
    ],
    controllor: [
        'if|else|elif',
        'switch|case',
        'for|in',
        'while|do|when',
        'with',
    ],
    null: ['null'],
    bool: ['true|false']
}

export const keywords = Object.entries(keywords_raw)
    .reduce((a: any, [k, v]: any) => (a[k] = v.join('|').split('|'), a), {})