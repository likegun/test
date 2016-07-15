'use strict';
const mongoose = require('mongoose');
const Damn = require('../models/Damn.js');

class Mongodb {
  constructor({host, port = 27017,username, password, database}) {
    mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${database}`);
  }

  getThoseFuckingData() {
    return Damn.find({}).exec();
  }

  saveThoseFuckingData() {
    const damn = new Damn({
      master_name: 'wrq',
      guesters: [
        {
          guester_name: 'guester1',
          friend_events: [
            {
              content: 'lunch',
              happen_at: [
                {
                  location: 'Kfc'
                },
                {
                  location: 'BigBrothers'
                }
              ]
            },
            {
              content: 'dinner',
              happen_at: [
                {
                  location: 'Kungfu'
                },
                {
                  location: 'BigBang'
                }
              ]
            }
          ]
        }
      ]
    });
    return damn.save();
  }

  deleteThoseFuckingDate() {
    // return
  }

  disconnect() {
    mongoose.disconnect(() => console.log('Mongodb disconnect!'));
  }
}

module.exports = Mongodb;
