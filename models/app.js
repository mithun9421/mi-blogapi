const mongoose = require("mongoose");

const AppSchema = new mongoose.Schema({
    appId : {
        type : String,
        auto : true
    },
    label : {
        type : String,
        required : true
    },
    value : {
        type : String,
        required : true
    },
    liveApp : {
        type : Object,
        required : true
    },
    sourcecode : {
        type : Object,
        required : true
    },
    description : {
        type : String,
    },
});

const AppModel = mongoose.model("myapps", AppSchema);
module.exports = AppModel;