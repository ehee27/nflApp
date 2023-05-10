const express = require('express');
const app = express.Router();
const { Team, Division } = require('../db');
const multer = require('multer');
const path = require('path');

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

const storageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    // console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storageEngine,
  limits: { fileSize: 10000000 },
  // fileFilter: (req, file, cb) => {
  //   checkFileType(file, cb);
  // },
});

app.put('/:id', upload.single('file'), async (req, res, next) => {
  try {
    const file = req.file;
    console.log(file);
    const team = await Team.findByPk(req.params.id);
    await team.update(req.body);
    res.send(file);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
