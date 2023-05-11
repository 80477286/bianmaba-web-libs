export default {
    install(app) {
        console.log("directive:prevent-repeat-click")
        this.setupPreventRepeatedClicks(app);
    },
    setupPreventRepeatedClicks(app: any) {
        app.directive('preventRepeatClick', {
            beforeMount(el, binding) {
                el.addEventListener('click', () => {
                    try {
                        if (!el.disabled) {
                            el.setAttribute('disabled', 'true')
                            let cls = el.getAttribute("class") + " is-disabled";
                            el.setAttribute('class', cls)
                            setTimeout(() => {
                                el.disabled = false
                                let cls = el.getAttribute("class").replaceAll("is-disabled", "");
                                el.setAttribute('class', cls)
                            }, binding.value || 1000)
                        }
                    } catch (e) {
                        console.error("防重复点击自定义事件绑定异常", e)
                    }
                })
            }
        })
    }
}