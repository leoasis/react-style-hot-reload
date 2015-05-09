module.exports = function(src, map) {
  if (this.cacheable) { this.cacheable(); }

  if (/StyleSheet\.create/.exec(src)) {
    var addition = [
      'if (module.hot) {',
      '  module.hot.dispose(function() {',
      '    StyleSheet.destroy(styles);',
      '  });',
      '}',
    ].join('\n');
    src = src + '\n' + addition;
  }

  this.callback(null, src, map);
}
