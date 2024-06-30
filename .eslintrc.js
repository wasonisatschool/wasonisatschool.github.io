module.exports = {
    extends: [
      'react-app',
      'react-app/jest',
    ],
    rules: {
      'jsx-a11y/anchor-is-valid': 'off',  // 禁用 a11y 锚点有效性检查
      'react/jsx-no-target-blank': 'off',  // 禁用 target="_blank" 的安全性检查
    },
  };
  