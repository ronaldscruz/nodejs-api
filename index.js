const express = require('express')
const mongoose = require('mongoose')

// Iniciar app
const app = express()

// Rotas
app.get('/', (req, res) => {
   res.send('Eae men')
})

app.listen(3001)