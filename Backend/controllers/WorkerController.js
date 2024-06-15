import workerRegister from "../models/Worker";

export const registerWorker = async(req,res)=>{
    const {username,password,fullname,mobile,location} = req.body;
    const userRegister = await workerRegister
}