export const Modifiers = {
    name: 'storage.modifier.nyar',
    match: '\\b(' + [
        'template|class',
        'new|using|expose|as|instance',
    ].join('|') + ')\\b',
}


export const Controlors = {
    name: 'keyword.control.nyar',
    match: '\\b(' + [
        'if|else',
        'switch',
        'for|in',
        'do|while',
        'with',
    ].join('|') + ')\\b',

}


export const Constants = {
    name: 'constant.language.nyar',
    match: '\\b(' + [
        'true|false|null'
    ].join('|') + ')\\b',
}
