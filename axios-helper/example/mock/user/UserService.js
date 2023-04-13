import * as Mock from "mockjs";

export default [{
    url: "/user/query",
    response: ({req, res}) => {
        return {
            success: true,
            result: "查询成功",
            total: 123,
            page: 1,
            size: 10,
            data: Mock.mock({
                'list|10': [
                    {
                        id: '@id',
                        name: '@cname',
                        regin: '@region',
                        province: '@province',
                        city: '@city',
                        address: '@county',
                        phone: /^1[0-9]{10}$/,
                        url: '@url'
                    }
                ]
            }).list,
        };
    },
}, {
    url: "/user/getById",
    response: () => {
        return {
            success: true,
            result: "根据ID获取数据成功",
            data: {
                id: '@id',
                name: '@cname',
                address: '@county',
                city: '@city',
                province: '@province',
                phone: /^1[0-9]{10}$/,
                regin: '@region',
                url: '@url'
            }
        };
    },
}, {
    url: "/user/save",
    response: () => {
        return {
            success: true,
            result: "保存成功"
        };
    },
}];
