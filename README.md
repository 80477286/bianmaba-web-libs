# 软链接创建、删除，引用及断开的方法

# 以下package-name都是package.json中的name字段

# lib-dir下方执行（被引用库）

    创建当前库的软链接
    npm  link

# 软连接删除

npm rm --global package-name

# app下执行（引用方）:

    去除软链接
    npm unlink package-name
    添加软链接
    npm link npm-package
    
    添加目录(添加本地目录到当前项目中)
    npm link ../dirname

# 查看所有全局软链接

npm ls --global --depth 0

# 登录仓库

npm login

# 指定仓库发布

npm publish --registry=https://registry.npmjs.org/

# 发布有命名空间的包

npm publish --access=public

# 当你的包是以你的usename为命名空间，譬如：@salone/watermaker，npm会认为这个包是私有的，当你npm publish时会报错，这是要附上--access=public告诉npm这个包是以开放包发布的即可。

# (仅仅当发第一个版本时会要求带access=public；当npm仓库中已经存在了这个包，日常更新版本无需加access)