const toString = Object.prototype.toString;
const kindOf = ((cache): any => {
    return (thing: any): any => {
        let str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    };
})(Object.create(null));

const kindOfTest = (type: any): Function => {
    type = type.toLowerCase();
    return function isKindOf(thing: any): boolean {
        return kindOf(thing) === type;
    };
}


const bind = (fn: any, thisArg: any): any => {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}

/**
 * 判断一个值是否为数组
 *
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是数组，则为 true，否则为 false
 */
export const isArray = (val: any): boolean => {
    return Array.isArray(val);
}

/**
 * 判断一个值是否为 undefined
 *
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是 undefined，则为 true，否则为 false
 */
export const isUndefined = (val: any): boolean => {
    return typeof val === 'undefined';
}

/**
 * 判断一个值是否为 Buffer
 *
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是 Buffer，则为 true，否则为 false
 */
export const isBuffer = (val: any): boolean => {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
        && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * 判断一个值是否为 ArrayBuffer
 *
 * @function
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是 ArrayBuffer，则为 true，否则为 false
 */
export const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * 判断一个值是否为 ArrayBuffer 的视图
 *
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是 ArrayBuffer 的视图，则为 true，否则为 false
 */
export const isArrayBufferView = (val: any): boolean => {
    let result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
        result = ArrayBuffer.isView(val);
    } else {
        result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
    }
    return result;
}

/**
 * 判断一个值是否为字符串
 *
 * @function
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是字符串，则为 true，否则为 false
 */
export const isString = (val: any): boolean => {
    return typeof val === 'string';
}

/**
 * 确定一个值是否为数字
 *
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是数字，则为true，否则为false
 */
export const isNumber = (val: any): boolean => {
    return typeof val === 'number' && isFinite(val);
}

/**
 * 确定一个值是否为对象
 *
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是对象，则为true，否则为false
 */
export const isObject = (val: any): boolean => {
    return val != null && typeof val === 'object' && Array.isArray(val) === false;
}

/**
 * 确定一个值是否为普通对象
 *
 * @param {Object} val 要测试的值
 * @return {boolean} 如果值是普通对象，则为true，否则为false
 */
export const isPlainObject = (val: any): boolean => {
    if (kindOf(val) !== 'object') {
        return false;
    }

    let prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
}

/**
 * 确定一个值是否为日期
 *
 * @function
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是日期，则为true，否则为false
 */
export const isDate = kindOfTest('Date');

/**
 * 确定一个值是否为文件
 *
 * @function
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是文件，则为true，否则为false
 */
export const isFile = kindOfTest('File');

/**
 * 确定一个值是否为布尔值
 *
 * @function
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是布尔值，则为true，否则为false
 */
export const isBlob = kindOfTest('Blob');

/**
 * 确定一个值是否为文件列表
 *
 * @function
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是文件列表，则为true，否则为false
 */
export const isFileList = kindOfTest('FileList');

/**
 * 确定一个值是否为函数
 *
 * @function
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是函数，则为true，否则为false
 */
export const isFunction = (val: any): boolean => {
    return toString.call(val) === '[object Function]';
}

/**
 * 确定一个值是否为流
 *
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是流，则为true，否则为false
 */
export const isStream = (val: any): boolean => {
    return isObject(val) && isFunction(val.pipe);
}

/**
 * 确定一个值是否为FormData
 *
 * @param {Object} thing 要测试的值
 * @returns {boolean} 如果值是FormData，则为true，否则为false
 */
export const isFormData = (thing: any): boolean => {
    let pattern = '[object FormData]';
    return thing && (
        (typeof FormData === 'function' && thing instanceof FormData) ||
        toString.call(thing) === pattern ||
        (isFunction(thing.toString) && thing.toString() === pattern)
    );
}

/**
 * 判断一个值是否为URLSearchParams对象
 * @function
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是URLSearchParams对象，则为true，否则为false
 */
export const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * 去除字符串开头和结尾的多余空格
 *
 * @param {String} str 要去除空格的字符串
 * @returns {String} 去除空格后的字符串
 */
export const trim = (str: any): string => {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * 确定我们是否在标准浏览器环境中运行
 *
 * 这允许 axios 在 Web Worker 和 React Native 中运行。
 * 这两个环境都支持 XMLHttpRequest，但不支持完全标准的全局变量。
 *
 * Web Worker：
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * React Native：
 *  navigator.product -> 'ReactNative'
 *
 * NativeScript：
 *  navigator.product -> 'NativeScript' 或 'NS'
 */
export const isStandardBrowserEnv = (): boolean => {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
        navigator.product === 'NativeScript' ||
        navigator.product === 'NS')) {
        return false;
    }
    return (
        typeof window !== 'undefined' &&
        typeof document !== 'undefined'
    );
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
export const forEach = (obj: any, fn: any): void => {
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

/**
 * 通过可变地添加对象 b 的属性来扩展对象 a。
 *
 * @param {Object} a 要扩展的对象
 * @param {Object} b 要复制属性的对象
 * @param {Object} thisArg 要绑定函数的对象
 * @return {Object} 对象 a 的结果值
 */
export const extend = (a: any, b: any, thisArg: any): any => {
    forEach(b, function assignValue(val: any, key: any) {
        if (thisArg && typeof val === 'function') {
            a[key] = bind(val, thisArg);
        } else {
            a[key] = val;
        }
    });
    return a;
}

/**
 * 删除字节顺序标记。这会捕获 EF BB BF（UTF-8 BOM）
 *
 * @param {string} content 带有 BOM 的内容
 * @return {string} 没有 BOM 的内容值
 */
export const stripBOM = (content: any): string => {
    if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
    }
    return content;
}

/**
 * 从一个构造函数继承原型方法到另一个构造函数
 * @param {function} constructor 构造函数
 * @param {function} superConstructor 父构造函数
 * @param {object} [props] 属性
 * @param {object} [descriptors] 描述符
 */

export const inherits = (constructor: any, superConstructor: any, props: any, descriptors: any): any => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    props && Object.assign(constructor.prototype, props);
}

/**
 * 将具有深度原型链的对象解析为平面对象
 * @param {Object} sourceObj 源对象
 * @param {Object} [destObj]
 * @param {Function} [filter]
 * @returns {Object}
 */

export const toFlatObject = (sourceObj: any, destObj: any, filter: any): any => {
    let props;
    let i;
    let prop;
    let merged: any = {};

    destObj = destObj || {};

    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while (i-- > 0) {
            prop = props[i];
            if (!merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = Object.getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

    return destObj;
}

/**
 * 确定一个字符串是否以指定字符串的字符结尾
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */

export const endsWith = (str: any, searchString: any, position: any): boolean => {
    str = String(str);
    if (position === undefined || position > str.length) {
        position = str.length;
    }
    position -= searchString.length;
    let lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
}


/**
 * 从类数组对象中返回新数组
 * @param {*} [thing]
 * @returns {Array}
 */
export const toArray = (thing: any): Array<any> | null => {
    if (!thing) return null;
    let i = thing.length;
    if (isUndefined(i)) return null;
    let arr = new Array(i);
    while (i-- > 0) {
        arr[i] = thing[i];
    }
    return arr;
}

export const isTypedArray = (function (TypedArray): Function {
    return function (thing: any): boolean {
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));


/**
 * 延迟执行
 * @param wait 延迟时间（毫秒），默认1000
 * @returns {Promise<unknown>}
 */
export const delay = (wait = 1000) => {
    return new Promise((resolve) => {
        setTimeout(resolve, wait)
    })
}

/**
 * 接受可变参数，期望每个参数都是一个对象，然后
 * 不可变地合并每个对象的属性并返回结果。
 *
 * 当多个对象包含相同的键时，参数列表中后面的对象将优先。
 *
 * 示例：
 *
 * ```js
 * let result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // 输出 456
 * ```
 *
 * @param {Object} obj1,obj3... 要合并的对象
 */
export const merge = function (...args: any[]): any {
    let result = arguments[0];
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

    for (let i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
    }
    return result;
}
const utils = {
    merge,
    delay,
    isTypedArray,
    toArray,
    endsWith,
    toFlatObject,
    inherits,
    stripBOM,
    extend,
    forEach,
    isStandardBrowserEnv,
    trim,
    isURLSearchParams,
    isFormData,
    isStream,
    isFunction,
    isFileList,
    isBlob,
    isFile,
    isDate,
    isPlainObject,
    isObject,
    isNumber,
    isString,
    isArrayBufferView,
    isArrayBuffer,
    isBuffer,
    isUndefined,
    isArray
}
export default utils;