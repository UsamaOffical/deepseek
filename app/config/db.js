import mongoose from "mongoose";

let cashed = global.mongoose || {conn:null,promise:null}

export default async function connectDB(){
    if(cashed.conn) return cashed.conn;
    if(!cashed.promise){
        cashed.promise = mongoose.connect(process.env.MONOGODB_URI).then((mongoose)=> mongoose)
    }
    try{
        cashed.conn = await cashed.promise

    }catch(error){
        console.log("ERROR: connection to MongoDB : ",error);
    }
    return cashed.conn
}