const express = require('express');
const app = express.Router();
const { Team, Division } = require('../db');

app.get('/', async (req, res, next) => {
  try {
    const teams = await Team.findAll();
    res.send(teams);
  } catch (ex) {
    next(ex);
  }
});

app.get('/:id', async (req, res, next) => {
  try {
    let team = await Team.findByPk(req.params.id, {
      include: Division,
    });
    res.send(team);
  } catch (ex) {
    next(ex);
  }
});

module.exports = app;
