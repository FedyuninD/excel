const CODES={
    A:65,
    Z:90
}

function createColumn(content) {
    return `<div class="column">${content}</div>`
}

function createCell(content) {
    return `<div class="cell" contenteditable>${content}</div>`
}

function createRow(content, number='') {
    return `
        <div class="row">
                <div class="row-info">${number}</div>
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
    rows.push(createRow(cols))
    for (let i=0; i<rowsCount; i++) {
        const cells=new Array(columnCount)
            .fill('')
            .map(createCell)
            .join('')
        rows.push(createRow(cells, i+1))
    }
    return rows.join('')
}