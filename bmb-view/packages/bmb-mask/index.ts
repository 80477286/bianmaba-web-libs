import directive from './directive'

export default {
    install(app: any) {
        app.use(directive)
    }
}
export * from "./src/mask"