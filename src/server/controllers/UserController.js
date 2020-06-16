module.exports = app => {
  app.get('/', (req, res) => {
    res.send('<h2>Ok</h2>')
  })
}
