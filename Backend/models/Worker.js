import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
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
    mail:{
        type:String
    },
    mobile:{
        type:String,
        default:""
    },
    location:{
        type:String,
        default:""
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserRegister"
    }
},{timestamps:true})

const workerRegister = mongoose.model('WorkerRegister',workerSchema)

export default workerRegister