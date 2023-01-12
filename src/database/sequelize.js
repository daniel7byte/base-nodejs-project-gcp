const config = require('./../config/config')

module.exports = {
  // this config is for Development and Google Cloud Build
  development: {
    url: config.db.url,
    username: config.db.user,
    password: config.db.pass,
    database: config.db.name,
    host: config.db.host,
    dialect: config.db.drive,
    define: {
      underscored: true
    }
  },
  // this config is for Production in Google Cloud Functions
  production: {
    url: config.db.url,
    username: config.db.user,
    password: config.db.pass,
    database: config.db.name,
    host: config.db.connection_name
      ? `/cloudsql/${config.db.connection_name}`
      : config.db.host,
    port: config.db.port,
    dialect: config.db.drive,
    dialectOptions: config.db.connection_name
      ? { socketPath: `/cloudsql/${config.db.connection_name}` }
      : { ssl: false },
    define: {
      underscored: true
    },
    logging: true
  }
}
