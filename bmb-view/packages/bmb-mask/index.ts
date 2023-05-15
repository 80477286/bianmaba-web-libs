import directive from './directive'
import '../css/mask.css'

export default {
    install(app: any) {
        app.use(directive)
    }
}
export * from "./src/mask"