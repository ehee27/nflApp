const express = require('express');
const app = express.Router();
const { User } = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.use(express.json());
const JWT = process.env.JWT;
require('dotenv').config();

app.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

app.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

app.post('/', async (req, res, next) => {
  try {
    // const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      password: hashedPassword,
    });

    res.json(user);
  } catch (err) {
    next(err);
  }
});

app.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.update(req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// LOGIN without Local Storage /////
app.post('/login', async (req, res, next) => {
  try {
    // find a user with the same username as input
    console.log('1. This is the req body...', req.body);
    const user = await User.findOne({
      where: { username: req.body.username },
    });
    console.log('2. This is the user...', user);
    if (user == null) {
      return res.status(400).send('cannot find user');
    } else {
      // if user - compare input passsword vs what's in db
      if (user && (await bcrypt.compare(req.body.password, user.password))) {
        // create the token
        const accessToken = jwt.sign({ id: user.id }, JWT);
        console.log('3. This is the toke...', accessToken);
        // respond with token
        res.json({ id: user.id, accessToken: accessToken });
      }
    }
  } catch (err) {
    next(err);
  }
});

module.exports = app;
