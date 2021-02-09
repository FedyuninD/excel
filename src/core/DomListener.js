import {capitalize} from "@core/utils";

export class DomListener {
    constructor($root, listeners=[]) {
        if (!$root) {
            throw new Error('There is no $root')
        }
        this.$root=$root
        this.listeners=listeners
    }

    initDOMListeners() {
        this.listeners.forEach(listener=>{
            const method=getMethodName(listener)
            if (!this[method]) {
                const name = this.name || ''
                throw new Error(`Method ${method} is not implemented in ${name} Component`)
            }
            this[method]=this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }
    removeDOMListeners() {
this.listeners.forEach(listener=>{
    const method=getMethodName(listener)
    this.$root.off(listener, this[method])
})
    }
}

function getMethodName(name) {
    return 'on'+capitalize(name)
}