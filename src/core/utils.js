export function capitalize(name) {
    return name[0].toUpperCase()+name.slice(1)
}

export function range(start, end) {
    if (start > end) {
        [end, start]=[start, end]
    }
    return new Array(end - start + 1)
        .fill('')
        .map((_, index)=>start+index)
}