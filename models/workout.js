const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const workoutSchema = new schema({
   name: { type: String, required: true },
   workout: { type: Array }
});

  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;

