// const { UUID, UUIDV4, STRING, INTEGER } = require('sequelize');
// const Sequalize = require('sequelize');
const db = require('./conn.js');
const Team = require('./Team');
const Division = require('./Division');

Team.belongsTo(Division);
Division.hasMany(Team);

const syncAndSeed = async () => {
  await db.sync({ force: true });

  const [
    chiefs,
    chargers,
    raiders,
    broncos,
    bills,
    dolphins,
    patriots,
    jets,
    bengals,
    browns,
    steelers,
    ravens,
    jaguars,
    texans,
    colts,
    titans,
    niners,
    seahawks,
    rams,
    cardinals,
    eagles,
    cowboys,
    giants,
    commanders,
    vikings,
    lions,
    packers,
    bears,
    buccaneers,
    panthers,
    saints,
    falcons,
    afcWest,
    afcEast,
    afcNorth,
    afcSouth,
    nfcWest,
    nfcEast,
    nfcNorth,
    nfcSouth,
  ] = await Promise.all([
    //// AFC WEST ////////
    Team.create({
      name: 'chiefs',
      divisionName: 'AFC West',
      wins: 14,
      losses: 3,
    }),
    Team.create({
      name: 'Chargers',
      divisionName: 'AFC West',
      wins: 10,
      losses: 7,
    }),
    Team.create({
      name: 'Raiders',
      divisionName: 'AFC West',
      wins: 6,
      losses: 10,
    }),
    Team.create({
      name: 'Broncos',
      divisionName: 'AFC West',
      wins: 5,
      losses: 12,
    }),
    //// AFC EAST ////////
    Team.create({
      name: 'Bills',
      divisionName: 'AFC East',
      wins: 13,
      losses: 3,
    }),
    Team.create({
      name: 'Dolphins',
      divisionName: 'AFC East',
      wins: 9,
      losses: 8,
    }),
    Team.create({
      name: 'Patriots',
      divisionName: 'AFC East',
      wins: 8,
      losses: 9,
    }),
    Team.create({
      name: 'Jets',
      divisionName: 'AFC East',
      wins: 7,
      losses: 10,
    }),
    //// AFC NORTH ////////
    Team.create({
      name: 'Bengals',
      divisionName: 'AFc North',
      wins: 12,
      losses: 4,
    }),
    Team.create({
      name: 'Browns',
      divisionName: 'AFC North',
      wins: 7,
      losses: 10,
    }),
    Team.create({
      name: 'Steelers',
      divisionName: 'AFC North',
      wins: 9,
      losses: 8,
    }),
    Team.create({
      name: 'Ravens',
      divisionName: 'AFC North',
      wins: 10,
      losses: 7,
    }),
    //// AFC SOUTH ////////
    Team.create({
      name: 'Jaguars',
      divisionName: 'AFC South',
      wins: 9,
      losses: 8,
    }),
    Team.create({
      name: 'Texans',
      divisionName: 'AFC South',
      wins: 3,
      losses: 13,
    }),
    Team.create({
      name: 'Colts',
      divisionName: 'AFC South',
      wins: 4,
      losses: 12,
    }),
    Team.create({
      name: 'Titans',
      divisionName: 'AFC South',
      wins: 7,
      losses: 10,
    }),
    //// NFC WEST ////////
    Team.create({
      name: '49ers',
      divisionName: 'NFC West',
      wins: 13,
      losses: 4,
    }),
    Team.create({
      name: 'Seahawks',
      divisionName: 'NFC West',
      wins: 9,
      losses: 8,
    }),
    Team.create({
      name: 'Rams',
      divisionName: 'NFC West',
      wins: 5,
      losses: 12,
    }),
    Team.create({
      name: 'Cardinals',
      divisionName: 'NFC West',
      wins: 5,
      losses: 12,
    }),
    //// NFC EAST ////////
    Team.create({
      name: 'Eagles',
      divisionName: 'NFC East',
      wins: 14,
      losses: 3,
    }),
    Team.create({
      name: 'Cowboys',
      divisionName: 'NFC East',
      wins: 12,
      losses: 5,
    }),
    Team.create({
      name: 'Giants',
      divisionName: 'NFC East',
      wins: 9,
      losses: 7,
    }),
    Team.create({
      name: 'Commanders',
      divisionName: 'NFC East',
      wins: 8,
      losses: 8,
    }),
    //// NFC NORTH ////////
    Team.create({
      name: 'Vikings',
      divisionName: 'NFC North',
      wins: 13,
      losses: 4,
    }),
    Team.create({
      name: 'Lions',
      divisionName: 'NFC North',
      wins: 9,
      losses: 8,
    }),
    Team.create({
      name: 'Packers',
      divisionName: 'NFC North',
      wins: 8,
      losses: 9,
    }),
    Team.create({
      name: 'Bears',
      divisionName: 'NFC North',
      wins: 3,
      losses: 14,
    }),
    //// NFC SOUTH ////////
    Team.create({
      name: 'Buccaneers',
      divisionName: 'NFC South',
      wins: 8,
      losses: 9,
    }),
    Team.create({
      name: 'Panthers',
      divisionName: 'NFC South',
      wins: 7,
      losses: 10,
    }),
    Team.create({
      name: 'Saints',
      divisionName: 'NFC South',
      wins: 7,
      losses: 10,
    }),
    Team.create({
      name: 'Falcons',
      divisionName: 'NFC South',
      wins: 7,
      losses: 10,
    }),
    ////// DIVISIONS /////////////////////////////
    Division.create({
      name: 'AFC West',
    }),
    Division.create({
      name: 'AFC East',
    }),
    Division.create({
      name: 'AFC North',
    }),
    Division.create({
      name: 'AFC South',
    }),
    Division.create({
      name: 'NFC West',
    }),
    Division.create({
      name: 'NFC East',
    }),
    Division.create({
      name: 'NFC North',
    }),
    Division.create({
      name: 'NFC South',
    }),
  ]);
  return {
    teams: {
      chiefs,
      chargers,
      raiders,
      broncos,
      bills,
      dolphins,
      patriots,
      jets,
      bengals,
      browns,
      steelers,
      ravens,
      jaguars,
      texans,
      colts,
      titans,
      niners,
      seahawks,
      rams,
      cardinals,
      eagles,
      cowboys,
      giants,
      commanders,
      vikings,
      lions,
      packers,
      bears,
      buccaneers,
      panthers,
      saints,
      falcons,
      afcWest,
      afcEast,
      afcNorth,
      afcSouth,
      nfcWest,
      nfcEast,
      nfcNorth,
      nfcSouth,
    },
  };
};

module.exports = {
  syncAndSeed,
  db,
  Team,
  Division,
};
