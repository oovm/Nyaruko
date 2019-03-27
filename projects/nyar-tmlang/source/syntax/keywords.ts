export const Modifiers = {
    'name': 'storage.modifier.nyar',
    'match': '\\b(' + [
        'Template|Class',
        'Using|Exposing|As|Instance',
    ].join('|') + ')\\b',
}


export const Controlors = {
    'name': 'keyword.control.nyar',
    'match': '\\b(' + [
        'If|Else|Otherwise',
        'Switch',
        'For|In',
        'Do|While',
        'With',
    ].join('|') + ')\\b',

}


export const Constants = {
    'name': 'constant.language.nyar',
    'match': '\\b(' + [
        'True|False|Null'
    ].join('|') + ')\\b',
}

