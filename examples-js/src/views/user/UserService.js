import {HttpClient, HttpContentType} from '@bianmaba/http-client'
import {Order} from "@bianmaba/http-client";

// @ts-ignore
class UserService extends HttpClient {
    static instance = new UserService();

    createGetById() {
        let executor = this.createGetExecutor('/user/getById').setDefaultResponse({
            data: {}
        });
        return executor;
    }

    createQuery() {
        return this.createQueryExecutor('/user/query').toAjaxRequest().setDefaultRequestData({
            order: new Order('name', 'asc')
        });
    }

    createSave() {
        return this.createPostExecutor('/user/save', {
            headers: {'Content-Type': HttpContentType["application/json"]}
        });
    }
}

export const userService = UserService.instance;

