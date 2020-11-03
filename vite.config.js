const path = require("path");

module.exports = {
    // 引入第三方配置
    optimizeDeps: {
        include: ["lib-flexible/flexible"],
    },
    alias: {
        "@": path.resolve("src"),
    },
    proxy: {
        "/App": {
            target: "http://ying.sxwf.top",
            changeOrigin: true,
        },
    },
};
