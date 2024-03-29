import {
    HttpClient,
    GetExecutor,
    PostExecutor,
    HttpContentType,
    DefaultResponse,
    Order,
    PageableQueryExecutor
} from '@bianmaba/http-client'

class UserService extends HttpClient {
    static userService: UserService = new UserService();


    public createGetById(): GetExecutor {
        let executor = this.createGetExecutor('/user/getById').mergeDefaultResponse({
            data: {}
        });
        return executor;
    }

    public createQuery() {
        return this.createPageableQueryExecutor('/user/query').toJsonRequest().mergeDefaultRequestData({
            order: new Order('name', 'descending')
        });
    }

    public createSave(): PostExecutor {
        return this.createPostExecutor('/user/save').toJsonRequest();
    }
}

export const userService = UserService.userService;

