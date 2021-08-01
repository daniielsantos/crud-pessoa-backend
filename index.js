const app = require('./src/config/app')
const mysql = require('./src/infra/databases/mysql')
const Tabelas = require('./src/infra/databases/tabelas')

const conexao = mysql.connect()

conexao.connect((erro) => {
  if (erro) {
    console.log('Erro ao conectar ao banco')
  } else {
    new Tabelas(mysql.conexao)
    
    app.listen(3000, () => {
      console.log('servidor conectado na porta 3000')
    })
  }
})
