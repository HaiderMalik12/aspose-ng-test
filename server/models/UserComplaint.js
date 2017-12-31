/*
 |--------------------------------------
 | UserComplaint Model
 |--------------------------------------
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userComplaintSchema = new Schema({
  user: {
    type:Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  complaint: {
    type: Schema.Types.ObjectId,
    ref: 'Complaint',
    required: true
  },
  text: {
    type: String,
    required:true
  }
});

module.exports = mongoose.model('UserComplaint', userComplaintSchema);
