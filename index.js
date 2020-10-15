const http = require("http")
const app = require("express")()
const server = http.createServer(app)
const path = require('path')
const io = require('socket.io')(server)
server.listen(3000)

exports.lobbies = {
  "abcdef": {}
}
exports.getLobbyByCode = (reqId) => {
  for(id in exports.lobbies) {
    if (reqId == id) return exports.lobbies.id
  } return -1
}

io.on('message', (socket,data) => {
  console.log(data)
  socket.emit("message", "response")
})

io.on('connect', socket => {
  console.log("Webserver Connection")
})

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get("/game/", (request, response) => {
    response.sendFile(path.join(__dirname + '/public/game/index.html'))
  })

app.get("/game.js", (request, response) => {
  response.sendFile(path.join(__dirname + '/public/game.js'))
})

app.get("/style.css", (request, response) => {
  response.sendFile(path.join(__dirname + '/public/style.css'))
})