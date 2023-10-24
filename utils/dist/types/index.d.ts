import * as utils from "./utils";
export default utils;
export declare const merge: (...args: any[]) => any;
export declare const delay: (wait?: number) => Promise<unknown>;
export declare const isTypedArray: Function;
export declare const toArray: (thing: any) => any[] | null;
export declare const endsWith: (str: any, searchString: any, position: any) => boolean;
export declare const toFlatObject: (sourceObj: any, destObj: any, filter: any) => any;
export declare const inherits: (constructor: any, superConstructor: any, props: any, descriptors: any) => any;
export declare const stripBOM: (content: any) => string;
export declare const extend: (a: any, b: any, thisArg: any) => any;
export declare const forEach: (obj: any, fn: any) => void;
export declare const isStandardBrowserEnv: () => boolean;
export declare const trim: (str: any) => string;
export declare const isURLSearchParams: Function;
export declare const isFormData: (thing: any) => boolean;
export declare const isStream: (val: any) => boolean;
export declare const isFunction: (val: any) => boolean;
export declare const isFileList: Function;
export declare const isBlob: Function;
export declare const isFile: Function;
export declare const isDate: Function;
export declare const isPlainObject: (val: any) => boolean;
export declare const isObject: (val: any) => boolean;
export declare const isNumber: (val: any) => boolean;
export declare const isString: (val: any) => boolean;
export declare const isArrayBufferView: (val: any) => boolean;
export declare const isArrayBuffer: Function;
export declare const isBuffer: (val: any) => boolean;
export declare const isUndefined: (val: any) => boolean;
export declare const isArray: (val: any) => boolean;
export declare const isEmpty: (val: any) => Boolean;
export declare const isNotEmpty: (val: any) => Boolean;
