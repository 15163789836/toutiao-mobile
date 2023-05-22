// postcss.config.js  基于node.js 处理csss
module.exports = {
    plugins: {
      'postcss-pxtorem': {
          //转换跟元素基准值 设计稿宽 除10
        rootValue: 37.5,
        //转换的属性css
        propList: ['*'],
      },
    },
  };