import bmbMask from './bmb-mask/index'

export default {
    install(app: any) {
        app.use(bmbMask)
    }
}
export * from "./bmb-mask/index"