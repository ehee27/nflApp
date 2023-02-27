const { UUID, UUIDV4, STRING, INTEGER } = require('sequelize');
const db = require('./conn');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT = process.env.JWT;

const User = db.define(
  'user',
  {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    username: {
      type: STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      unique: true,
    },
    password: {
      type: STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    hooks: {
      async beforeCreate(user) {
        console.log(user);
        console.log('-----------');
        const newUser = user.dataValues;
        console.log(newUser);
        newUser.password = await bcrypt.hash(newUser.password, 8);
        console.log(
          await bcrypt.compareSync(user.dataValues.password, newUser.password)
        );
        console.log(newUser.password);
      },
    },
  }
);

User.authenticate = async ({ username, password }) => {
  const user = await User.findOne({
    where: {
      username,
    },
  });
  console.log(await bcrypt.compare(password, user.password));
  if (user && (await bcrypt.compare(password, user.password))) {
    return jwt.sign({ id: user.id }, JWT);
  }
  const error = new Error('invalid credentials');
  error.status = 401;
  throw error;
};

User.findByToken = async token => {
  try {
    const { id } = jwt.verify(token, process.env.JWT);
    const user = await User.findByPk(id);
    if (user) {
      return user;
    }
    throw 'user not found';
  } catch (error) {
    const err = new Error('invalid credentials');
    error.status = 401;
    throw err;
  }
};
User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, JWT);
};

module.exports = User;
