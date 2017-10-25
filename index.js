let express = require('express')
let bodyParser = require('body-parser')

// Create app and parser
let app = express()
let parser = bodyParser.json()

// Wire up body parser - take tool out of tool box
app.use(parser)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Make default story
let defaultStory = {
	"name": "Sunit Kulkarni",
	"from": "Planet Alderon",
	"favoriteColor": "the shade of the multiverse",
	"picture": "url to a picture of you",
	"piratesOrNinjas": "ninjas",
	"favoriteCookies": "obviously jduvs"
}

// This is our status route
app.get('/status', (request, response) => {
	response.send("{'status': 'on'}")
})

app.get('/stories', (request, response) => {
	response.send(defaultStory)
})

app.listen(3000, () => {
	console.log('Listening on port 3000 for wiring')
})