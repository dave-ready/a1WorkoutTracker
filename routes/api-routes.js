//const Workout = require("../models").Workout;
//const router = require("express").Router();

const db = require("../models");

module.exports = function(app) {
    
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    })
    
    app.get("/api/workouts/range", ({}, res) => {
      db.Workout.find({}).then((dbWorkout) => {
        res.json(dbWorkout);
      }).catch(err => {
        res.status(400).json(err);
      });
    });
    
    app.post("/api/workouts/", (req, res) => {
        db.Workout.create(req.body).then((dbWorkout) => {
          res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
          });
      });
      
      app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
          { _id: req.params.id }, { exercises: req.body }
        ).then((dbWorkout) => {
          res.json(dbWorkout);
        }).catch(err => {
          res.status(400).json(err);
        });
    });
};




//module.exports = (app) => {

//  router.get("/api/workouts", (req, res) => {
//  Workout.find()
//    .then(workouts => res.json(workouts))
//    .catch(err => res.json(err));
//});


//router.put("/api/workouts/:id", (req, res) => {
//  Workout.findByIdAndUpdate(
//    req.params.id,
//    { $push: { exercises: req.body } },
//    { new: true }
//  )
//    .then(workout => res.json(workout))
//    .catch(err => res.json(err));
//});

//router.post("/api/workouts", (req, res) => {
//  Workout.create({
//    day: Date.now()
//  })
//    .then(newWorkout => {
//      res.json(newWorkout);
//    })
//    .catch(err => res.json(err));
//});

//router.get("/api/workouts/range", (req, res) => {
//  Workout.find({})
//    .then(workouts => {
//      res.json(workouts);
//    })
//    .catch(err => res.json(err));
//});


//};

//module.exports = router;
