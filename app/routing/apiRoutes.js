const characterData = require("../app/data/characters.js");

module.exports = function(app){
  app.get("/api/characters", function () {
    res.json(characterTable)
  })
}