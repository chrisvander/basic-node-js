const express = require('express')
const app = express()
const sass = require('node-sass')
var request = require('request');

app.set('view engine', 'ejs')
app.use(express.static('public'))
sass.render({ file: 'sass/style.scss' });
app.get('/', (req, res) => res.render('pages/index', {root: __dirname }))
app.get('/data/:fileName', (req, res) =>
  res.sendFile('data/' + req.params.fileName + '.json', {root: __dirname })
)
app.listen(8080, () => console.log('Listening on port 8080'))
