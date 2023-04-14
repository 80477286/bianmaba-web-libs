import {DefaultGlobalOptions} from "@/interface/types";
import {HttpContentType, HttpMethod} from "@/interface/enums";

export const DEFAULT_GLOBAL_OPTIONS: DefaultGlobalOptions = {
    method: HttpMethod.POST,
    headers: {'Content-Type': HttpContentType["application/json"]},
    xRequestedWith: 'XMLHttpRequest'
}