import {HttpClient, GetExecutor, PostExecutor, HttpContentType} from '@bianmaba/axios-helper'
import {merge} from "@bianmaba/utils";

class UserService extends HttpClient {
    static userService: UserService = new UserService();

    public createGetById(): GetExecutor {
        merge()
        return this.createGetExecutor('/user/getById');
    }

    public createQuery(): PostExecutor {
        return this.createPostExecutor('/user/query').toAjaxRequest();
    }

    public createSave(): PostExecutor {
        return this.createPostExecutor('/user/save', {
            headers: {'Content-Type': HttpContentType["application/json"]}
        });
    }
}

export const userService = UserService.userService;

