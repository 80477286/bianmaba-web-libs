import {DefaultGlobalOptions} from "./types";
import {HttpContentType, HttpMethod} from "./enums";

export const DEFAULT_GLOBAL_OPTIONS: DefaultGlobalOptions = {
    method: HttpMethod.POST,
    headers: {'Content-Type': HttpContentType["application/json"]},
    xRequestedWith: 'XMLHttpRequest'
}