const app = require("./src/app")


const PORT = 8080

app.listen(PORT, function () {
    console.log(`O app está rodando na porta ${PORT}`)
})