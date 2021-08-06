import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'x-rhooks',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  base: '/x-rhooks',
  publicPath: '/x-rhooks/',
  outputPath: 'docs-dist',
  mode: 'site',

  extraBabelPlugins: [
    ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
  ],
  exportStatic: {},
  dynamicImport: {}, // 启用按需加载
  hash: true, // 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存
  devtool: false, // 使用最低成本的 sourcemap 生成方式，默认是 cheap-module-source-map
  webpack5: {},
  mfsu: {}, // mfsu 是一种基于 webpack5 新特性 Module Federation 的打包提速方案
  nodeModulesTransform: { type: 'none', exclude: [] }, // 编译优化 不希望 node_modules 下的文件走 babel 编译
  targets: { chrome: 79, firefox: false, safari: false, edge: false, ios: false }, // 选择合适的浏览器版本，可减少不少尺寸
  workerLoader: {},
});
