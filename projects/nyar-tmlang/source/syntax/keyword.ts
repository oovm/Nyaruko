import { keywords } from '../tokens'
export const Modifiers = {
    name: 'storage.modifier.nyar',
    match: '\\b(' + keywords.modifier.join('|') + ')\\b',
}

export const Controlors = {
    name: 'keyword.control.nyar',
    match: '\\b(' + keywords.controllor.join('|') + ')\\b',
}

const constants = keywords.bool
    .concat(keywords.null)
    .join('|')
export const Constants = {
    name: 'constant.language.nyar',
    match: '\\b(' + constants + ')\\b',
}