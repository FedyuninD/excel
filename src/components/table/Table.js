import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";
import {resizeHandler} from "@/components/table/table.resize";
import {shouldResize} from "@/components/table/table.functions";

export class Table extends ExcelComponent {
    static className='excel__table'

    constructor($root) {
        super($root, {
            listeners:['click', 'mousedown', 'mouseup']
        })
    }

    toHTML() {
        // eslint-disable-next-line no-undef
        return createTable()
    }

    onClick(event) {
        console.log('click', event.target)
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event)
        }
    }
    onMouseup() {
        console.log('mouseup')
    }
}