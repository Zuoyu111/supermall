// const path = require('path');//引入path模块
// function resolve(dir){
//   return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
// }
// module.exports={
//   chainWebpack:(config)=>{
//     config.resolve.alias
//     config.resolve.alias.set('@', resolve('src'))
//         .set('components', resolve('src/components'))
//         .set('assets','src/assets')
//         .set('common','src/common').set('network','src/network')
//
//     //set第一个参数：设置的别名，第二个参数：设置的路径　　　
//   }
// }
//










// cli4以前的配置
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'common': '@/common',
        'network': '@/network',
      }
    }
  }
}
