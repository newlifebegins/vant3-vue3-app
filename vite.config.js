const path = require("path");

module.exports = {
    // 引入第三方配置
    optimizeDeps: {
        include: ["lib-flexible/flexible"],
    },
    alias: {
        "/@/": path.resolve(__dirname, "./src/components"),
    },
    proxy: {
        "/api": {
            target: "http://www.baidu.com",
            changeOrigin: true,
        },
    },
};
