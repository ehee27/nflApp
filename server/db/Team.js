const { UUID, UUIDV4, STRING, INTEGER, FLOAT } = require('sequelize');
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
  avgYdsTotal: {
    type: FLOAT,
  },
  avgYdsPass: {
    type: FLOAT,
  },
  avgYdsRush: {
    type: FLOAT,
  },
  seasonPoints: {
    type: STRING(1000),
    get() {
      return JSON.parse(this.getDataValue('seasonPoints'));
    },
    set(val) {
      return this.setDataValue('seasonPoints', JSON.stringify(val));
    },
  },
  divisionId: {
    type: UUID,
  },
  logo: {
    type: STRING,
  },
  primaryColor: {
    type: STRING,
  },
});

module.exports = Team;
