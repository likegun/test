'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const damnSchema = new Schema({
  master_name: String,
  guesters: [{
    guester_name: String,
    friend_events: [
      {
        content: String,
        happen_at: [
          {
            location: String,
            date: { type: Date, default: Date.now },
          }
        ]
      }
    ]
  }]
});

const Damn = mongoose.model('Model', damnSchema);

module.exports = Damn;
