//FIXME: Escape on ^ $ . * +  - ? = ! : | \ / ( ) [ ] { }
const operators_raw = {
    basic: [
        '+',
        '-',
        '*', '×',
        '/', '÷',
        '^', '√',
        '@',
        ':',
        '$',
    ],
    compare: [
        '<', '<=',
        '>', '>=',
        '===', '=!=',
    ],
    prefix: [
        '!',
    ],
    postfix: [
        '#',
        '!',
    ],
    assign: [
        '=',
        '.=',
    ],
    lazy_assign: [':='],
    type_assign: ['::'],
}

function regexEscape(source: string) {
    const escaped_char = '^$()[]{}*.?+\\|'
    return source.split('')
        .map(char => { return escaped_char.includes(char) ? '\\' + char : char })
        .join('')
}

export const operators = Object.entries(operators_raw)
    .reduce((a: any, [k, v]: any) => (a[k] = v.map(regexEscape), a), {})