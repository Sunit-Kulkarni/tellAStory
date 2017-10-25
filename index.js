let express = require('express')
let bodyParser = require('body-parser')

// Create app and parser
let app = express()
let parser = bodyParser.json()

// Wire up body parser - take tool out of tool box
app.use(parser)

//Make default story
let defaultStory = {
	"name": "your name",
	"from": "the city you're from",
	"favoriteColor": "your favorite color",
	"picture": "url to a picture of you",
	"piratesOrNinjas": "choose wisely",
	"favoriteCookies": "obviously jduvs"
}

// This is our status route
app.get('/status', (request, response) => {
	response.send("{'status': 'on'}")
})

app.listen(3000, () => {
	console.log('Listening on port 3000 for wiring')
})