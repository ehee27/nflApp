const express = require('express');
const app = express.Router();
const { User } = require('../db');

app.post('/', async (req, res, next) => {
  try {
    console.log('this is the auth API...', req.body);
    const user = await User.authenticate(req.body);
    console.log('this is the user...', user);
    res.send(user);
  } catch (ex) {
    next(ex);
  }
});

app.get('/', async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});

module.exports = app;
