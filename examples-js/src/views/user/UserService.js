import {HttpClient, HttpContentType} from '@bianmaba/axios-helper'

// @ts-ignore
class UserService extends HttpClient {
    static instance = new UserService();

    createGetById() {
        return this.createGetExecutor('/user/getById').setDefaultResponse({data: {}})
    }

    createQuery() {
        return this.createPostExecutor('/user/query', {
            headers: {'Content-Type': HttpContentType["application/json"]}
        }).setDefaultRequestData({
            size: 10,
            page: 1,
            pageOffset: -1
        });
    }

    createSave() {
        return this.createPostExecutor('/user/save', {
            headers: {'Content-Type': HttpContentType["application/json"]}
        }).setDefaultRequestData({size: 10, page: 1, pageOffset: -1});
    }
}

export const userService = UserService.instance;

