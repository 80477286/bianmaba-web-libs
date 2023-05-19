import {isArray, isObject, merge} from "@bianmaba/utils";

/**
 * 只会对数组，对你，FormData,URLSearchParams的类型创建新对像
 * @param target
 */
const instanceByTargetType = (target: any) => {
    if (target instanceof FormData) {
        return new FormData();
    } else if (target instanceof URLSearchParams) {
        return new URLSearchParams();
    } else if (isArray(target)) {
        return [];
    } else if (isObject(target)) {
        return {};
    }
    return target;
}
/**
 * 合并参数，最终返回参数类型为最后一个参数的类型
 * @param args
 */
export const mergeDataOrParams = (...args: any[]) => {
    if (args.length <= 0) {
        return null;
    }
    //克隆目标数据
    let coped = instanceByTargetType(args[args.length - 1]);
    for (let i = 0; i < args.length; i++) {
        let src = args[i] || {}
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
                    let cs = JSON.parse(JSON.stringify(src))
                    keys.forEach(key => {
                        coped[key] = cs[key]
                    })
                }
            }
        }
    }
    //返回克降数据
    return coped;
}