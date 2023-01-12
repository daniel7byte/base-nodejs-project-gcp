const compression = require('compression')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const apiRouter = require('./src/routes/index.js')

const app = express()

const { env, port } = require('./src/config/config')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compression())

// Say hello
app.get('/', (req, res) => (
  res.status(200).json({ message: 'Welcome to the base project!' })
))

// Routes
app.use('/api/v1', apiRouter)

if (env === 'development') {
  // Local environment
  app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
  })
} else {
  // cloud function
  // 'project' will be the name of the function in GCP
  exports.project = app
}
