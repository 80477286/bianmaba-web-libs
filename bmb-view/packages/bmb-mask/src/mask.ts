import {createApp, defineComponent, reactive, toRefs, h, withDirectives, withCtx, Transition, vShow, ref} from 'vue'

export interface MaskOption {
    fullScreen: boolean,
    target: any
    visible: boolean,
    progress?: number | null
    text?: string | null
    customClass?: string | null
}


export function createMaskComponent(options: MaskOption | any = {
    visible: false,
    fullScreen: false,
    target: document.body
}) {
    options.target = options.target ?? document.body;
    let afterLeaveTimer: number
    const afterLeaveFlag = ref(false)
    const data = reactive({
        ...options
    })

    function update(options: MaskOption | any = {}) {
        let keys = Object.keys(options);
        keys.forEach(key => {
            data[key] = options[key];
        })
    }

    function setText(text: string) {
        data.text = text
    }

    function setFullScreen(fullScreen: boolean) {
        data.fullScreen = fullScreen
    }

    function setVisible(visible: boolean) {
        data.visible = visible
    }

    function setProgress(progress: number) {
        data.progress = progress
    }

    function destroySelf() {
        removeElLoadingChild()
        maskComponent.unmount()
    }

    function removeElLoadingChild(): void {
        vm.$el?.parentNode?.removeChild(vm.$el)
    }

    function close() {
        afterLeaveFlag.value = true
        clearTimeout(afterLeaveTimer)
        afterLeaveTimer = window.setTimeout(handleAfterLeave, 200)
        data.visible = false
    }

    function handleAfterLeave() {
        if (!afterLeaveFlag.value) return
        afterLeaveFlag.value = false
        destroySelf()
    }

    const createMaskComponent = defineComponent({
        name: 'BmbMask',
        setup(_, {expose}) {
            return () => {
                let createProgress = (progress: number) => {
                    progress = progress > 1 ? 1 : progress;
                    return h('div', {
                        style: {
                            position: 'relative',
                            width: '300px',
                            height: '20px',
                            backgroundColor: '#ebeef5',
                            border: '1px solid #999',
                            borderRadius: '3px'
                        }
                    }, [h('div', {
                        style: {
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 300 - 300 * progress + 'px',
                            backgroundColor: '#409eff'
                        }
                    }), h('div', {
                        innerHTML: ((progress ?? 0) * 100).toFixed(1) + '%',
                        style: {
                            fontSize: '12px',
                            textAlign: 'right',
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: (300 - 300 * progress) + 'px'
                        }
                    })])
                }
                let createCircle = () => {
                    return h('svg', {
                        viewBox: '0 0 50 50',
                        style: {
                            height: '50px',
                            width: '50px',
                            display: 'inline',
                            '-webkitAnimation': 'bmb-mask-rotate 2s linear infinite',
                            animation: 'bmb-mask-rotate 2s linear infinite',
                        }
                    }, [h('circle', {
                        cx: 25,
                        cy: 25,
                        r: 20,
                        fill: 'none',
                        style: {
                            animation: 'bmb-mask-dash 1.5s ease-in-out infinite',
                            '-webkitAnimation': 'bmb-mask-dash 1.5s ease-in-out infinite',
                            strokeDasharray: '90,150',
                            strokeDashoffset: 0,
                            strokeWidth: 2,
                            stroke: '#409eff',
                            strokeLinecap: 'round'
                        }
                    })])
                }
                let createText = (text: string) => {
                    return h('div', {
                        innerHTML: text,
                        style: {
                            fontSize: '12px',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0
                        }
                    })
                }
                let inner = (data.progress != null && data.progress != undefined) ? createProgress(data.progress) : createCircle()
                let text = data.text ? createText(data.text) : null
                return h(
                    Transition,
                    {
                        name: 'fade',
                    },
                    {
                        default: withCtx(() => [
                            withDirectives(
                                h('div', {
                                        class: [data.customClass, 'bmb-mask', data.fullScreen ? 'is-fullscreen' : '']
                                    },
                                    [h('div', {
                                        style: {
                                            position: 'absolute',
                                            top: '50%',
                                            width: '100%',
                                            textAlign: 'center',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center'
                                        }
                                    }, [inner, text])]),
                                [[vShow, data.visible]]
                            ),
                        ]),
                    }
                )
            }
        },
    })

    const maskComponent = createApp(createMaskComponent)
    const vm = maskComponent.mount(document.createElement('div'))
    return {
        ...toRefs(data),
        setText,
        close,
        setProgress,
        setFullScreen,
        setVisible,
        update,
        vm
    }
}


export const masking = (options: MaskOption | any = {
    visible: false,
    fullScreen: false,
    target: document.body
}) => {
    options.target = options.target ?? document.body;
    let instance = options.target['MASK_KEY']?.instance
    if (!instance) {
        instance = createMaskComponent(options);
        options.target.appendChild(instance.vm.$el)
        options.target['MASK_KEY'] = {instance: instance, options}
    } else {
        instance.update(options)
    }
    return instance
}

