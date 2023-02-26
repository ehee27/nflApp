const { UUID, UUIDV4, STRING, INTEGER } = require('sequelize');
const db = require('./conn');

const Team = db.define('team', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
  },
  divisionName: {
    type: STRING,
  },
  wins: {
    type: INTEGER,
  },
  losses: {
    type: INTEGER,
  },
  divisionId: {
    type: UUID,
  },
});

module.exports = Team;
