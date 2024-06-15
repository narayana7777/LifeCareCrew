import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        default:"",
        unique:true
    },
    fullname:{
        type:String,
        default:""
    },
    password:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    mobile:{
        type:String,
        default:""
    },
    location:{
        type:String,
        default:""
    }
},{timestamps:true})

const userRegister = mongoose.model('UserRegister',userSchema)

export default userRegister