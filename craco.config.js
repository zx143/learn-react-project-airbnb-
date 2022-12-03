/*
 * @Description:
 * @Date: 2022/12/03 19:45:51
 * @LastEditTime: 2022/12/03 20:25:21
 */
const path = require("path");
const CracoLessPlugin = require("craco-less");
const resolve = (pathName) => path.resolve(__dirname, pathName);

module.exports = {
  // 进行 webpack 配置
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      services: resolve("src/services"),
      utils: resolve("src/utils"),
      hooks: resolve("src/hooks"),
      store: resolve("src/store"),
      assets: resolve("src/assets"),
    },
  },
  // less配置
  plugins: [
    {
      plugin: CracoLessPlugin,
      // options: {
      //   lessLoaderOptions: {
      //     lessOptions: {
      //       modifyVars: {
      //         '@primary-color' : '#1DA57A'
      //       },
      //       javascriptEnabled: true
      //     }
      //   }
      // }
    },
  ],
};
