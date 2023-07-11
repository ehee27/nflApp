const express = require('express')
const app = express.Router()
const { User } = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
app.use(express.json())
const JWT = process.env.JWT
require('dotenv').config()

app.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

app.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

app.post('/', async (req, res, next) => {
  try {
    // destruct req.body
    const { username, password } = req.body
    // Hash that shit
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
      username: username,
      password: hashedPassword,
    })
    console.log('User created...', user)
    //
    res.json(user)
  } catch (err) {
    next(err)
  }
})

app.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    await user.update(req.body)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

// LOGIN AND SIGN TOKEN ---------------------------------------------------------------------
app.post('/login', async (req, res, next) => {
  try {
    // destruct req.body
    const { username, password } = req.body
    // check for user duplicate
    const user = await User.findOne({
      where: { username: username },
    })

    if (user == null) {
      return res.status(400).send('cannot find user')
    } else {
      const match = await bcrypt.compare(password, user.password)

      const accessToken = jwt.sign(
        {
          userInfo: {
            username: user.username,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '20s' }
      )
      console.log('THIS is the access token...', accessToken)
      res.json(accessToken)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = app
