import bmbMask from './bmb-mask'
import directives from './directives'

export default {
    install(app: any) {
        app.use(bmbMask)
        app.use(directives)
    }
}
export * from "./bmb-mask/index"