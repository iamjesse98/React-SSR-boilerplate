import express from 'express'

import renderer from './helpers/renderer'

const app = express()

app.use(express.static('public'))

app.get('/api', (req, res) => {
    res.json({ message: 'working' })
})

app.get('*', (req, res) => {
    res.send(renderer(req))
})

app.listen(4500, _ => console.log(`Magic happens on 4500!`))