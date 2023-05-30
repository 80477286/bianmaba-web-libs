import {GetExecutor, HttpClient, HttpContentType, PostExecutor} from '@bianmaba/http-client'
import {Order} from "@bianmaba/http-client";

// @ts-ignore
class UserService extends HttpClient {
    static instance = new UserService();

    createGetById() {
        let executor = this.createGetExecutor('/user/getById').mergeDefaultResponse({
            data: {}
        });
        return executor;
    }

    createQuery() {
        return this.createPageableQueryExecutor('/user/query').toJsonRequest().mergeDefaultRequestData({
            order: new Order('name', 'descending')
        });
    }

    createSave() {
        return this.createPostExecutor('/user/save').toJsonRequest();
    }
}

export const userService = UserService.instance;

