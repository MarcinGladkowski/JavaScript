// import dotenv from 'dotenv'
// import jwt from 'jsonwebtoken'
// import express from 'express'
// import bodyParser from 'body-parser'

const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const express = require('express')
require('dotenv').config()


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

var jsonParser = bodyParser.json()

//app.use(express.json());
app.listen(8080, () => {
    console.log('Server is running!')
})

app.get('/', (req, res) => res.send('ok'))

app.post('/api/auth/login', (req, res) => {
    
    const email = req.body.email
    const password = req.body.password

    console.log(email)
    
    const accessToken = jwt.sign({ id: 1}, process.env.TOKEN_SECRET, {expiresIn: 20})
    const refreshToken = jwt.sign({ id: 1}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: 525600})
    
    
    res.send({ accessToken, refreshToken})
})

function authenticate(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token === null) return res.sendStatus(403)

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)

        req.user = user
        next()
    })
}

app.post('/api/auth/refresh', jsonParser, async (req, res) => {
    const refreshToken = req.body.token

    console.log(refreshToken)

    if (!refreshToken) {
        return res.sendStatus(401)
    }
    // check in Db 
    try {
        await jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
    } catch  (err) {
        return res.sendStatus(403)
    }

    const accessToken = jwt.sign({ id: 1}, process.env.TOKEN_SECRET, {expiresIn: 20})
    res.send({ accessToken })
})

// requires authorization
app.get('/api/users', authenticate, (req, res) => {
    let users = [{id: 1, username: 'Marcin'}]
    res.send(users)
})

