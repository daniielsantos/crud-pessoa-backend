const repository = require('../repository/pessoa-repository')


class PessoaModel {
  constructor() {}

  pessoas() {    
    return repository.pessoas()      
  }
  
  inserir(pessoa) {
    return repository.adicionaPessoa(pessoa)
      .then(result => {
        const id = result.insertId

        return {id, ...pessoa}
      })     
  }

  remover(id) {
    return repository.removerPessoa(id)
  }

  getPessoa(id) {
    return repository.getPessoa(id)
  }

  altera(id, pessoa) {
    return repository.altera(id, pessoa)
      .then(res => {
        return {id}
      })
  }

}

module.exports = new PessoaModel