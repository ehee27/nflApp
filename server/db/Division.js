const { UUID, UUIDV4, STRING } = require('sequelize');
const db = require('./conn');

const Division = db.define('division', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
  },
});

module.exports = Division;
