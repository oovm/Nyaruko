import { keywords } from '../tokens'
const constants = keywords.bool
    .concat(keywords.null)
    .join('|')
export const Keywords = [
    {
        name: 'storage.modifier.nyar',
        match: '\\b(' + keywords.modifier.join('|') + ')\\b',
    },
    {
        name: 'keyword.control.nyar',
        match: '\\b(' + keywords.controllor.join('|') + ')\\b',
    },
    {
        name: 'keyword.control.module.nyar',
        match: '\\b(' + keywords.module.join('|') + ')\\b',
    },
    {
        name: 'constant.language.nyar',
        match: '\\b(' + constants + ')\\b',
    }
]