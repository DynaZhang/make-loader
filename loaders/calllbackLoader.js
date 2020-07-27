module.exports = function (source) {
  const result = source.replace('dell', this.query.name)
  this.callback(null,result)

  // this.callback(
  //   err: Error || null,    // 错误
  //   content: String || Buffer,   // 向外输出的代码
  //   sourceMap:? SourceMap,    // sourceMap(可选)
  //   meta:? any      // 向外输出的额外内容（可选）
  // )
}
