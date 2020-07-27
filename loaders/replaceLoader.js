/**
 * 简单Loader
 * @param source  源文件内容
 * @returns {*}
 */
module.exports = function(source) {
  console.log(source)
  return source.replace('张朱磊', 'xxxx')
}
