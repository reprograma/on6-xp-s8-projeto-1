const app = require('./src/app')

const PORT = 9090

app.listen(PORT, function(){
    console.log(`O server-games está rodando na porta ${PORT}`)
})