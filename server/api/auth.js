const express = require('express')
const app = express.Router()
const { User } = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.post('/', async (req, res, next) => {
  try {
    // create the credentials/user object
    const { username, password } = req.body

    // find a user
    const foundUser = await User.findOne({ username })
    if (!foundUser) return res.status(401).json({ message: 'Unauthorized' })

    // find a match
    const match = await bcrypt.compare(password, foundUser.password)
    console.log('This is the match..............', match)

    // console.log('this is the auth API...', req.body)
    // const user = await User.authenticate(req.body)
    // console.log('this is the user...', user)
    // res.send(user)
  } catch (ex) {
    next(ex)
  }
})

app.get('/', async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization))
  } catch (ex) {
    next(ex)
  }
})

module.exports = app
