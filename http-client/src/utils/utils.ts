import {isObject, merge} from "@bianmaba/utils";

export const mergeDataOrParams = (src: FormData | URLSearchParams | any, target: FormData | URLSearchParams | any) => {
    target = target || {};
    src = src || {}
    //克隆目标数据
    let coped = target;
    if (target instanceof FormData) {
        target = target as FormData;
        coped = new FormData();
        target.forEach((val: FormDataEntryValue, key: string) => {
            coped.append(key, val)
        })
    } else if (target instanceof URLSearchParams) {
        target = target as URLSearchParams;
        coped = new URLSearchParams();
        target.forEach((val: FormDataEntryValue, key: string) => {
            coped.append(key, val)
        })
    } else if (isObject(target)) {
        coped = merge(target, {})
    }
    //复制原数据到克隆数据
    if (coped instanceof FormData || coped instanceof URLSearchParams || isObject(coped)) {
        if (src instanceof FormData) {
            src.forEach((val: FormDataEntryValue, key: string) => {
                if (coped instanceof FormData || coped instanceof URLSearchParams) {
                    coped.append(key, val)
                } else {
                    coped[key] = val
                }
            })
        } else if (src instanceof URLSearchParams) {
            src.forEach((val, key) => {
                if (coped instanceof FormData || coped instanceof URLSearchParams) {
                    coped.append(key, val)
                } else {
                    coped[key] = val
                }
            })
        } else if (isObject(src)) {
            let keys = Object.keys(src) as []
            if (coped instanceof FormData || coped instanceof URLSearchParams) {
                keys.forEach(key => {
                    coped.append(key, src[key])
                })
            } else {
                return merge(coped, src);
            }
        }
    }

    //返回克降数据
    return coped;
}