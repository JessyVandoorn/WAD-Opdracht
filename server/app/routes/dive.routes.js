module.exports = app => {
    const dives = require("../controllers/dive.controller.js");
    app.post("/dives", dives.create);
    app.get("/dives", dives.findAll);
    app.delete("/dives/:diveId", tweets.delete);
}