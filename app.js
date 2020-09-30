
const express = require('express')
const app = express()
const port = 7001

app.get('/', (req, res) => {
  res.send('Hello World! Adding some new features')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})