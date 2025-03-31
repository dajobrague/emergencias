module.exports = {
  extends: ['react-app'],
  rules: {
    'no-unused-vars': ['error', { 
      varsIgnorePattern: '^procesarEtiquetas$',
      args: 'none',
      ignoreRestSiblings: true
    }]
  }
} 