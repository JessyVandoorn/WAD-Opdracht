const Dive = require("../models/dive.model");

    exports.create = (req, res) => {
        if(!req.body.datum){
            return res.status(400).send({
                message: "datum can not be empty"
            });
        }
            if(!req.body.locatie){
                return res.status(400).send({
                    message: "locatie can not be empty"
            });
        }
            if(!req.body.diepte){
                return res.status(400).send({
                    message: "diepte can not be empty"
            });
        }
            if(!req.body.temperatuur){
                return res.status(400).send({
                    message: "temperatuur can not be empty"
            });
        }
            if(!req.body.buddy){
                return res.status(400).send({
                    message: "buddy can not be empty"
            });
        }
            if(!req.body.luchtStart){
                return res.status(400).send({
                    message: "luchtStart can not be empty"
            });
        }
            if(!req.body.luchtEind){
                return res.status(400).send({
                    message: "luchtEind can not be empty"
            });
        }

    const dive = new Dive({
        datum: req.body.datum,
        locatie: req.body.locatie,
        diepte: req.body.diepte,
        temperatuur: req.body.temperatuur,
        buddy: req.body.buddy,
        luchtStart: req.body.luchtStart,
        luchtEind: req.body.luchtEind
    });

    dive
        .save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error"
            });
        });
}
    exports.findAll = (req, res) => {
            Dive.find()
              .then(dives => {
                res.send(dives);
              })
              .catch(err => {
                res.status(500).send({
                  message: err.message || "Error"
                });
              });
    };

exports.delete = (req, res) => {
    Dive.findByIdAndRemove(req.params.diveId)
    .then(dive => {
      if (!dive) {
        return res.status(404).send({
          message: "Dive not found with id " + req.params.diveId
        });
      }
      res.send({ message: "Dive deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Dive not found with id " + req.params.diveId
        });
      }
      return res.status(500).send({
        message: "Could not delete dive with id " + req.params.diveId
      });
    });
}