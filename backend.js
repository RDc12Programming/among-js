const index = require("./index.js")

exports.Lobby = class {
  constructor () {
    this.code // generate random code that doesnt already exist
    this.members = []
  }
  beginGame () {

  }
}

exports.Client = class {
  constructor ( socket, name, lastColor, gear ) {
    this.gear = gear
    this.socket = socket
    this.name = name
    this.color = lastColor
    this.lobbyCode = 0
  }
  changeColor ( newColor ) {
    index.getLobbyByCode(this.lobbyCode).members.forEach((member) => {
      if(member.color == newColor) return false
      this.color = newColor; return true
    })
  }
}