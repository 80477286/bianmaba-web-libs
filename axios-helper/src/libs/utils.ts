const toString = Object.prototype.toString;
const kindOf = (function (cache) {
    return function (thing: any) {
        let str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    };
})(Object.create(null));
/**
 * 确定一个值是否为普通对象
 *
 * @param {Object} val 要测试的值
 * @return {boolean} 如果值是普通对象，则为true，否则为false
 */
export const isPlainObject = (val: any) => {
    if (kindOf(val) !== 'object') {
        return false;
    }

    let prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
}
/**
 * 判断一个值是否为数组
 *
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是数组，则为 true，否则为 false
 */
export const isArray = (val: any) => {
    return Array.isArray(val);
}
/**
 * 遍历数组或对象，对每个元素调用一个函数。
 *
 * 如果 `obj` 是一个数组，则对于每个元素，回调函数将被调用并传递值、索引和完整的数组。
 *
 * 如果 `obj` 是一个对象，则对于每个属性，回调函数将被调用并传递值、键和完整的对象。
 *
 * @param {Object|Array} obj 要遍历的对象
 * @param {Function} fn 对每个元素要调用的回调函数
 */
export const forEach = (obj: any, fn: Function) => {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
        return;
    }

    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
        /*eslint no-param-reassign:0*/
        obj = [obj];
    }

    if (isArray(obj)) {
        // Iterate over array values
        for (let i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
        }
    } else {
        // Iterate over object keys
        for (let key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                fn.call(null, obj[key], key, obj);
            }
        }
    }
}
export const merge = function (...args: any[]): any {
    let result: any = {};
    let assignValue = (val: any, key: any) => {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
            result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
            result[key] = merge({}, val);
        } else if (isArray(val)) {
            result[key] = val.slice();
        } else {
            result[key] = val;
        }
    }

    for (let i = 0, l = args.length; i < l; i++) {
        forEach(args[i], assignValue);
    }
    return result;
}