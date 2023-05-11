/**
 * 判断一个值是否为数组
 *
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是数组，则为 true，否则为 false
 */
export declare const isArray: (val: any) => boolean;
/**
 * 判断一个值是否为 undefined
 *
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是 undefined，则为 true，否则为 false
 */
export declare const isUndefined: (val: any) => boolean;
/**
 * 判断一个值是否为 Buffer
 *
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是 Buffer，则为 true，否则为 false
 */
export declare const isBuffer: (val: any) => boolean;
/**
 * 判断一个值是否为 ArrayBuffer
 *
 * @function
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是 ArrayBuffer，则为 true，否则为 false
 */
export declare const isArrayBuffer: Function;
/**
 * 判断一个值是否为 ArrayBuffer 的视图
 *
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是 ArrayBuffer 的视图，则为 true，否则为 false
 */
export declare const isArrayBufferView: (val: any) => boolean;
/**
 * 判断一个值是否为字符串
 *
 * @function
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是字符串，则为 true，否则为 false
 */
export declare const isString: (val: any) => boolean;
/**
 * 判断一个值是否为字符串
 *
 * @function
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是字符串，则为 true，否则为 false
 */
export declare const isBoolean: (val: any) => boolean;
/**
 * 确定一个值是否为数字
 *
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是数字，则为true，否则为false
 */
export declare const isNumber: (val: any) => boolean;
/**
 * 确定一个值是否为对象
 *
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是对象，则为true，否则为false
 */
export declare const isObject: (val: any) => boolean;
/**
 * 确定一个值是否为普通对象
 *
 * @param {Object} val 要测试的值
 * @return {boolean} 如果值是普通对象，则为true，否则为false
 */
export declare const isPlainObject: (val: any) => boolean;
/**
 * 确定一个值是否为日期
 *
 * @function
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是日期，则为true，否则为false
 */
export declare const isDate: Function;
/**
 * 确定一个值是否为文件
 *
 * @function
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是文件，则为true，否则为false
 */
export declare const isFile: Function;
/**
 * 确定一个值是否为布尔值
 *
 * @function
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是布尔值，则为true，否则为false
 */
export declare const isBlob: Function;
/**
 * 确定一个值是否为文件列表
 *
 * @function
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是文件列表，则为true，否则为false
 */
export declare const isFileList: Function;
/**
 * 确定一个值是否为函数
 *
 * @function
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是函数，则为true，否则为false
 */
export declare const isFunction: (val: any) => boolean;
/**
 * 确定一个值是否为流
 *
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是流，则为true，否则为false
 */
export declare const isStream: (val: any) => boolean;
/**
 * 确定一个值是否为FormData
 *
 * @param {Object} thing 要测试的值
 * @returns {boolean} 如果值是FormData，则为true，否则为false
 */
export declare const isFormData: (thing: any) => boolean;
/**
 * 判断一个值是否为URLSearchParams对象
 * @function
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果值是URLSearchParams对象，则为true，否则为false
 */
export declare const isURLSearchParams: Function;
/**
 * 去除字符串开头和结尾的多余空格
 *
 * @param {String} str 要去除空格的字符串
 * @returns {String} 去除空格后的字符串
 */
export declare const trim: (str: any) => string;
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
export declare const isStandardBrowserEnv: () => boolean;
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
export declare const forEach: (obj: any, fn: any) => void;
/**
 * 通过可变地添加对象 b 的属性来扩展对象 a。
 *
 * @param {Object} a 要扩展的对象
 * @param {Object} b 要复制属性的对象
 * @param {Object} thisArg 要绑定函数的对象
 * @return {Object} 对象 a 的结果值
 */
export declare const extend: (a: any, b: any, thisArg: any) => any;
/**
 * 删除字节顺序标记。这会捕获 EF BB BF（UTF-8 BOM）
 *
 * @param {string} content 带有 BOM 的内容
 * @return {string} 没有 BOM 的内容值
 */
export declare const stripBOM: (content: any) => string;
/**
 * 从一个构造函数继承原型方法到另一个构造函数
 * @param {function} constructor 构造函数
 * @param {function} superConstructor 父构造函数
 * @param {object} [props] 属性
 * @param {object} [descriptors] 描述符
 */
export declare const inherits: (constructor: any, superConstructor: any, props: any, descriptors: any) => any;
/**
 * 将具有深度原型链的对象解析为平面对象
 * @param {Object} sourceObj 源对象
 * @param {Object} [destObj]
 * @param {Function} [filter]
 * @returns {Object}
 */
export declare const toFlatObject: (sourceObj: any, destObj: any, filter: any) => any;
/**
 * 确定一个字符串是否以指定字符串的字符结尾
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */
export declare const endsWith: (str: any, searchString: any, position: any) => boolean;
/**
 * 从类数组对象中返回新数组
 * @param {*} [thing]
 * @returns {Array}
 */
export declare const toArray: (thing: any) => Array<any> | null;
export declare const isTypedArray: Function;
/**
 * 延迟执行
 * @param wait 延迟时间（毫秒），默认1000
 * @returns {Promise<unknown>}
 */
export declare const delay: (wait?: number) => Promise<unknown>;
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
export declare const merge: (...args: any[]) => any;
