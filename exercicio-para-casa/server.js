const app = require('./src/app')

const PORT = 8080

app.listen(PORT, function (request, response) {
    console.log(`App rodando na porta ${PORT}`)
})