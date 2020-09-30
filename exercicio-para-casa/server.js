const app = require('./src/app')

const PORT = 8080

app.listen(PORT, function (request, response) {
    console.log("Listening on port " + PORT)
})
