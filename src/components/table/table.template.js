const CODES={
    A:65,
    Z:90
}

function createCell(row) {
    return function(content, col) {
        return `<div class="cell" contenteditable data-col="${col}" data-type='cell' data-id="${row}:${col}">
            ${content}
            </div>
        `
    }
}

function createColumn(content, index) {
    return `
            <div class="column" data-type="resizable" data-col="${index}">
            ${content}
            <div class="col-resize" data-resize="col"></div>
            </div> 
`
}

function createRow(index, content) {
    const resize= index ? `<div class="row-resize" data-resize="row"></div>` : ''
    return `
        <div class="row" data-type="resizable">
                <div class="row-info">
                    ${index ? index : ''}
                    ${resize}
                </div>
                <div class="row-data">${content}</div>
            </div>
        `
}

function toChar(_, index) {
    return String.fromCharCode(index+CODES.A)
}

export function createTable(rowsCount=15) {
    const columnCount=CODES.Z-CODES.A+1

    const cols =new Array(columnCount)
        .fill('')
        .map(toChar)
        .map(createColumn)
        .join('')

    const rows=[]
    rows.push(createRow(null, cols))
    for (let i=0; i<rowsCount; i++) {
        const cells=new Array(columnCount)
            .fill('')
            .map(createCell(i))
            .join('')
        rows.push(createRow(i+1, cells))
    }
    return rows.join('')
}