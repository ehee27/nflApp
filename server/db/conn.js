const Sequelize = require('sequelize');
const config = {};

if (process.env.QUIET) {
  config.logging = false;
}
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/nflApp',
  config
);

module.exports = db;
