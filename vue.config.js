const data = require('./public/Mock/index');
module.exports = {
  lintOnSave: false,
  devServer: {
    // open: true,
    before: app => {
      app.get('/data', (req, res) => {
        res.json(data)
      })
    }
  }
}
