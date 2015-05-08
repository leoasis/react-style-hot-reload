import StyleSheet from 'react-style';

let styleTag = null;

function ensureStyleTag() {
  if (styleTag) return;
  styleTag = document.createElement('style');
  document.head.appendChild(styleTag);
}

module.exports = {
  applyToDOM: () => {
    ensureStyleTag();
    styleTag.innerHTML = StyleSheet.compile().css;
  }
}
