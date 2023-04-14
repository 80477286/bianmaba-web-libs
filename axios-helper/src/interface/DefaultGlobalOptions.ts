import {DefaultGlobalOptions} from "@/interface/Types";
import {HttpContentType, HttpMethod} from "@/interface/Enums";

export const DEFAULT_GLOBAL_OPTIONS: DefaultGlobalOptions = {
    method: HttpMethod.POST,
    headers: {'Content-Type': HttpContentType["application/json"]},
    xRequestedWith: 'XMLHttpRequest'
}