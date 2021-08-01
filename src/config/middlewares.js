const bodyParser = require('../middlewares/body-parser')
const cors = require('../middlewares/cors')

module.exports = (app) => {
  app.use(cors)
  app.use(bodyParser)
}