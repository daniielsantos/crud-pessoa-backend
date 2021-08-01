const mysql = require('mysql')
require('dotenv').config()
// const env = require('../../config/env')
class Mysql {
  conexao

  connect() {
    const connection = mysql.createConnection({
      host: process.env.SQL_HOST,
      port: process.env.SQL_PORT,
      user: process.env.SQL_USER,
      password: process.env.SQL_PASS,
      database: 'ufpr'
    })
    this.conexao = connection
    return connection
  }
}

module.exports = new Mysql()