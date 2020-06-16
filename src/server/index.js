const app = require('./config')

const port = 3001

app.listen(port, _ => {
  console.log(`Server rodando na porta: ${port}`)
})