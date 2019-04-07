//FIXME: 正则转义
export const BasicOperators = {
    name: 'keyword.operator.basic.nyar',
    match: '\\b(' + [
        '+', '-', '*', '/'
    ].join('|') + ')\\b',

}

export const AssignOperators = {
    name: 'keyword.operator.assign.nyar',
    match: '\\b(' + [
        '=', '+=', '-='
    ].join('|') + ')\\b',
}