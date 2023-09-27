import bmbMask from './bmb-mask'
import directives from './directives'
import BmbNpmnDesigner from './bmb-npmn-designer/NpmnDesigner.vue'


export default {
    install(app: any) {
        app.use(bmbMask)
        app.use(directives)
        app.component("BmbNpmnDesigner", BmbNpmnDesigner)
    }
}
export * from "./bmb-mask/index"
export {BmbNpmnDesigner}
