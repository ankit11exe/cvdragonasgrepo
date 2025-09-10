const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { 
        type: String, 
        required: true,
    },
    phone : String,
    designation: String,
    email : {
        type : String,
        unique: true,
        required : true,
    },
    pfp : {
        type : String,
        default : "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHwyfDB8fHww",
        set : (value) => value === "" ? "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHwyfDB8fHww" : value,
    },
    role : {
        type : String,
        enum: ["Admin", "User"],
        default: "User",
    },
    status : {
        type : String,
        enum : ["Active","Inactive"],
        default : "Active",
    },
    


});


module.exports = mongoose.model("User", userSchema);