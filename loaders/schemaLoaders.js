const validateOptions = require('schema-utils');
const loaderUtils = require('loader-utils');

const schema = {
  type: 'object',
  properties: {
    test: {
      type: 'string'
    }
  }
}

module.exports = function(source) {
  const options = loaderUtils.getOptions(this);

  validateOptions(schema, options, 'Example Loader')

  // 在这里写转换 source 的逻辑 ...
  return `export default ${ JSON.stringify(source) }`;
}

