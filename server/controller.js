// Controller here
// complete building out the controller
var Product = require('../db/')

const controller = {
  get:  (req, res) => {
    res.send('touching server!!!')
  },
  post: (req, res) => {
    res.send('touching post!!!')
  },
  put:(req, res) => {
    res.send('touching put!!!')
  },
  delete:  (req, res) => {
    res.send('touching delete!!!')

}
}

module.exports = controller