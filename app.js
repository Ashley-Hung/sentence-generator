const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateSentence = require('./generate')

const app = express()
const port = 3000

/* Setting view engine */
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

/* Setting static files */
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

/* Setting body-parser */
app.use(bodyParser.urlencoded({ extended: true }))

/* Route setting */
// home page
app.get('/', (req, res) => {
  res.render('index')
})

// post
app.post('/', (req, res) => {
  const { role } = req.body
  const sentence = generateSentence(role)

  res.render('index', { sentence, role })
})

/* Start and listen on the server */
app.listen(port, () => {
  console.log(`App is running on localhost:${port}`)
})
