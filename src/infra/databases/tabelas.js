const conexao = require('../../infra/databases/mysql')


class Tabelas {

  constructor(conexao) {
    this.conexao = conexao
    this.pessoa()
  }

  pessoa() {
    const query = `CREATE TABLE IF NOT EXISTS Pessoa (id INT NOT NULL AUTO_INCREMENT,
      nome varchar(50),
      email varchar(50),
      idade int,
      PRIMARY KEY (id))`
    this.conexao.query(query, (erro) => {
      if (erro) {
        console.log('Erro ao criar tabela Pessoa')
      } else {
        console.log('Tabela Pessoa criada com sucesso')
      }
    })
  }
}

module.exports = Tabelas
