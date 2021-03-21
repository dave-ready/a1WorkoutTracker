const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Workout = mongoose.model("Workout", workoutSchema); 
  


const workoutSchema = new Schema({
    day: { 
        type: Date, 
        required: true 
        },
    exercises: [
      {
        name: {
            type: String,
            required: true,
            trim: true
        },
        type: {
          type: String,
          trim: true
        },
        duration: {
          type: Number
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        }
      }
    ]
  });

  
  
  module.exports = Workout;

