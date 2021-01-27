import dotenv from 'dotenv'
import jws from 'jsonwebtoken'
import express from 'express'

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => res.send('ok'))

app.get('/api/users', (req, res) => {
    let users = [{id: 1, username: 'Marcin'}]
    res.send(users)
})


app.get('/api/auth/login', (req, res) => {
    
    const email = req.body.email
    const password = req.body.password
    
    const accessToken = jwt.sign({ id: 1}, process.env.TOKEN_SECRET, {expiresIn: 86400})
    const refreshToken = jwt.sign({ id: 1}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: 525600})
    
    
    res.send({ accessToken, refreshToken})
})

app.listen(8080, () => {
    console.log('Server is running!')
})