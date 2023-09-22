module.exports = {
    devServer: {
        open: true,
        // 配置前端请求代理
        proxy: {
            '^/api': {
                target: 'https://www.starbucks.com.cn/',
            },
            '^/bff': {
                target: 'https://bff.starbucks.com.cn/',
                pathRewrite: { '/api1': '' },
            },
        },
    }
}
