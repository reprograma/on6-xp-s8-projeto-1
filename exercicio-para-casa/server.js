const app = require("./scr/app")

const PORT = 8080

app.listen(PORT, function (request, response) {
console.log(`The server is running on port ${PORT}`);
})