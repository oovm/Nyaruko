//FIXME: Escape on ^ $ . * +  - ? = ! : | \ / ( ) [ ] { }
const operators_raw = {
    basic: [
        '\\+',
        '-',
        '\\*',
        '/',
        '\\^',
        '@',
    ],
    prefix: [
        '!',
    ],
    postfix: [
        '!',
    ],
    assign: [
        '=',
        '.=',
    ],
    lazy_assign: [':='],
}

export const operators = Object.entries(operators_raw)
    .reduce((a: any, [k, v]: any) => (a[k] = v.join('|').split('|'), a), {})
