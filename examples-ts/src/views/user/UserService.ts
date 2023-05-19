import {HttpClient, GetExecutor, PostExecutor, HttpContentType, DefaultResponse, Order} from '@bianmaba/http-client'

class UserService extends HttpClient {
    static userService: UserService = new UserService();

    public createGetById(): GetExecutor {
        let executor = this.createGetExecutor('/user/getById').setDefaultResponse({
            data: {}
        });
        return executor;
    }

    public createQuery(): PostExecutor {
        return this.createPageableQueryExecutor('/user/query').toJsonRequest().mergeDefaultRequestData({
            order: new Order('name', 'asc')
        }).mergeDefaultResponse();
    }

    public createSave(): PostExecutor {
        return this.createPostExecutor('/user/save', {
            headers: {'Content-Type': HttpContentType["application/json"]}
        });
    }
}

export const userService = UserService.userService;

