import preventRepeatedClicks from "./prevent-repeat-click";
import inputNumberAppend from "./input-number-append";

export default {
    install(app: any) {
        app.use(preventRepeatedClicks)
        app.use(inputNumberAppend)
    }
};
