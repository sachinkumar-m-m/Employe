const mongoose = require('mongoose');

const Employee = new mongoose.Schema(
    {
        name:{type:String,required:true,trim:true},
        email:{type:String,required:true,trim:true},
        date:{type:String,required:true},
        mobile:{type:String,required:true,trim:true},
        jobtype:{type:String,required:true,trim:true},
        location:{type:String,required:true},
        // photo:{type:Object,required:true}
    },
    {
        collection:'employees',
        timestamps:true
    }
);

module.exports = mongoose.model('Employee',Employee);