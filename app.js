
const express = require('express')
const app = express()
const port = 7001

app.get('/', (req, res) => {
  res.send('Hello World! I have added some new features now')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})