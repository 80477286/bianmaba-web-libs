import {AxiosHelper, GetExecutor, PostExecutor} from '@bianmaba/axios-helper/src'
import {HttpContentType} from '@bianmaba/axios-helper/src/services/interface/Enums'

// @ts-ignore
class UserService extends AxiosHelper {
    static instance: UserService = new UserService();

    public createGetById(): GetExecutor {
        return this.createGetExecutor('/user/getById').setDefaultResponse({data: {}})
    }

    public createQuery(): PostExecutor {
        return this.createPostExecutor('/user/query', {
            headers: {'Content-Type': HttpContentType["application/json"]}
        })
            .setDefaultRequestData({
                size: 10,
                page: 1,
                pageOffset: -1
            });
    }

    public createSave(): PostExecutor {
        return this.createPostExecutor('/user/save', {
            headers: {'Content-Type': HttpContentType["application/json"]}
        })
            .setDefaultRequestData({size: 10, page: 1, pageOffset: -1});
    }
}

export const userService = UserService.instance;

