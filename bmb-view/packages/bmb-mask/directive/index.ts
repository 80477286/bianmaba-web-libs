import {createMaskComponent, MaskOption} from "../src/mask";

const MASK_KEY = 'mask'
export default {
    install(app) {
        console.log("directive:mask")
        this.setupPreventRepeatedClicks(app);
    },
    setupPreventRepeatedClicks(app: any) {
        app.directive('mask', {
            mounted(el, binding) {
                let options = {target: el, visible: true} as MaskOption;
                if (binding.value != null && binding.value != undefined && typeof binding.value === 'boolean') {
                    Object.assign(options, {visible: binding.value})
                } else if (binding.value != null && typeof binding.value === 'object' && Array.isArray(binding.value) === false) {
                    Object.assign(options, binding.value)
                }
                let instance = createMaskComponent(options);
                el.appendChild(instance.vm.$el)
                el[MASK_KEY] = {instance: instance, options}
            },
            unmounted(el, binding) {
                el[MASK_KEY]?.instance.close()
            },
        })
    }
}