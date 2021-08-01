const express = require('express')
const setMiddlewares = require('./middlewares')
const pessoaController = require('../controllers/pessoa-controller')


const app = express()

setMiddlewares(app)
pessoaController(app)
module.exports = app
