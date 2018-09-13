const app = require('express')()

app.locals.title = 'First NGINX'

app.get('/', (req, res) => {
	res.send('Testing')	
})

const server = app.listen(process.env.PORT || 80, () => {
	const host = server.address().address
	const port = server.address().port
	console.log("Listening at http://" + host + port)
})

