module.exports = app => {
    const dives = require("../controllers/dive.controller.js");
    app.post("/dives", dives.create);
    app.get("/dives", dives.findAll);
    app.get("/dives/:diveId", dives.findOne);
    app.delete("/dives/:diveId", dives.delete);
}