const express = require('express');
const app = express.Router();
const { Division, Team } = require('../db');

module.exports = app;

app.get('/', async (req, res, next) => {
  try {
    const divisions = await Division.findAll();
    res.send(divisions);
  } catch (ex) {
    next(ex);
  }
});

app.get('/:id', async (req, res, next) => {
  try {
    let division = await Division.findByPk(req.params.id, {
      include: Team,
    });
    res.send(division);
  } catch (ex) {
    next(ex);
  }
});
