const app = require("./src/app")

const PORT = 8081

app.listen(PORT, function (){
    console.log("O Nosso app esta rodando na porta " + PORT)
})
