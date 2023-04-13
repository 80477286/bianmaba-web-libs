export default [{
    url: "/mock/auth/login",
    method: "post",
    response: () => {
        return {
            code: 200,
            message: "ok",
            data: {success: true,username:'abc'}
        };
    }
}]