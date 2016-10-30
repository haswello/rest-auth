var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var bcrypt   = require('bcrypt');
var userSchema = new Schema({
	
    name: {
	type: String,
        required: true
    },
    password: {
	type: String,
        required: true
    }
});
