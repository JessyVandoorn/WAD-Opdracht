const Dive = require("../models/dive.model");

    exports.create = (req, res) => {
        if(!req.body.Datum){
            return res.status(400).send({
                message: "Dive can not be empty"
            });
        }

    const dive = new Dive({
        Datum: req.body.Datum,
        Locatie: req.body.Locatie,
        Diepte: req.body.Diepte,
        Temperatuur: req.body.Temperatuur,
        Buddy: req.body.Buddy,
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