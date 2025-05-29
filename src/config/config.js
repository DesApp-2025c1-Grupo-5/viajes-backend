module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './src/database/dev.sqlite'  // Puedes ponerlo donde prefieras
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:'
  },
  production: {
    dialect: 'sqlite',
    storage: './src/database/prod.sqlite'
  }
};