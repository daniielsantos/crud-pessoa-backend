const query = require('../infra/databases/querys')

class PessoaRepository {
  constructor(){}

  adicionaPessoa(pessoa) {    
    const sql = `INSERT INTO Pessoa SET ?`
    return query(sql, pessoa)
  }

  pessoas() {
    const sql = 'SELECT * FROM Pessoa'
    return query(sql)
  }

  removerPessoa(id) {
    const sql = `DELETE FROM Pessoa WHERE id = ?`
    return query(sql, id)
  }

  getPessoa(id) {
    const sql = `SELECT * FROM Pessoa WHERE id = ?`
    return query(sql, id)
  }

  altera(id, pessoa) {
    const sql = `UPDATE Pessoa SET ? WHERE id = ?`
    const params = [{...pessoa}, parseInt(id)]
    
    return query(sql, params)
  }
}

module.exports = new PessoaRepository