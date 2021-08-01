const app = require('../config/app')
const Pessoa = require('../models/pessoa-model')


module.exports = (app) => {

  app.get('/pessoa', (req, res) => {
    Pessoa.pessoas()
      .then(pessoas => {
        res.json(pessoas)
      })
      .catch(erro => res.status(400).json(erro))
  })

  app.post('/pessoa', (req, res) => {
    const pessoa = req.body
    Pessoa.inserir(pessoa)
      .then(pessoa => {
        res.json(pessoa)
      })
      .catch(erro => res.status(400).json(erro))
  })

  app.delete('/pessoa/:id', (req, res) => {
    const { id } = req.params    
    Pessoa.remover(id)
      .then(result => res.json(result))
      .catch(erro => res.status(400).json(erro))
  })

  app.get('/pessoa/:id', (req, res) => {
    const { id } = req.params
    Pessoa.getPessoa(id)
      .then(pessoa => res.json(pessoa[0]))
      .catch(erro => res.status(400).json(erro))
  })

  app.patch('/pessoa/:id', (req, res) => {
    const { id } = req.params
    const pessoa = req.body
    Pessoa.altera(id, pessoa)
      .then(pessoa => res.json(pessoa))
      .catch(erro => res.status(400).json(erro))
  })
}


