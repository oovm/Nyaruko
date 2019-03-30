export const AutoComplete: {
    'prefix': string
    'body': string[]
    'description': string
}[] = []

// word.contains(pattern)?
export function wordContains(word: any, pattern: any) {
    return word.indexOf(pattern) > -1
}