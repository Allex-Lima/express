const express = require('express')
const expressHandlebars = require('express-handlebars')
require('dotenv').config()

const app = express()

//configurar o view engine Handlebars
app.engine('handlebars', expressHandlebars({
	defaultLayout: 'main',
}))
app.set('view engine', 'Handlebars')

const port = process.env.PORT | 3000

app.get('/', (req, res) => {
	res.type('text/plain')
	res.send('Meadowlark Travel')
})

app.get('/about*', (req, res) => {
	res.type('text/plain')
	res.send('About Meadowlark Travel')
})

app.get('/about/contact', (req, res) => {
	res.type('text/plain')
	res.send('Contact')
})

app.use((req, res) => {
	res.type('text/plain')
	res.status(404)
	res.send('404, - NOT FOUND.')
})

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
	console.error(err.message)
	res.type('text/plain')
	res.status('500')
	res.send('500 - server error')
})

app.listen(port, () => {
	console.log(`Express started on http//localhost:${port}, press Ctrl-c to terminate`)
    
})