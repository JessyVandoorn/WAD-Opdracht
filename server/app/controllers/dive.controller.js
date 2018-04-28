const Dive = require("../models/dive.model");

    exports.create = (req, res) => {
        if(!req.body.datum){
            return res.status(400).send({
                message: "Dive can not be empty"
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