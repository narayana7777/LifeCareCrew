import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        default:""
    },
    fullname:{
        type:String,
        default:""
    },
    password:{
        type:String,
    },
    mobile:{
        type:String,
        default:""
    }
},{timestamps:true})

const adminRegister = mongoose.model('AdminRegister',adminSchema)

export default adminRegister