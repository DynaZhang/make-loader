const loaderUtils = require('loader-utils');

module.exports = function(source) {
  // const options = loaderUtils.getOptions(this)
  // console.log(options)
  return source.replace('前端', this.query.name)
}
