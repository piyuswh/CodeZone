const mongoose = require('mongoose');

const db_name='CodeZone'
mongoose.connect(`${process.env.MONGO_URI}/${db_name}`)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  Role: String,
  codes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'code'
  }]
});

module.exports = mongoose.model('users', UserSchema);
