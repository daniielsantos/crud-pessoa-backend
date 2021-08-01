const db = require('./mysql')


module.exports = function execQuery(query, params = '') {
  return new Promise((resolve, reject) => {
    db.conexao.query(query, params, (erro, result) => {
      if (erro) {
        reject(erro)
      } else {
        resolve(result)
      }
    })
  })
}