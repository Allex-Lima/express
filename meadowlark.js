const express = require('express')
const expressHandlebars = require('express-handlebars')

require('dotenv').config()

const app = express()

//configurar o view engine Handlebars
app.engine('handlebars', expressHandlebars.engine({
	defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

const port = process.env.PORT | 3000

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => {
	res.render('about')
})
app.use((req, res) => {
	res.status(404)
	res.render('404, - NOT FOUND.')
})

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
	console.error(err.message)
	res.status(500)
	res.send('500')
})

app.listen(port, () => {
	console.log(`Express started on http//localhost:${port}, press Ctrl-c to terminate`)
    
})