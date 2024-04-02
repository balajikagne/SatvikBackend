const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{type:String,require},
    // bdate:{type:String,require},
    // location:{type:String,require},
    mobNumber:{type:String,require},
    password:{type:String,require},
    isAdmin:{type:Boolean,require ,default:false},
},{
    timestamps:true,
}
)
module.exports=new mongoose.model('users',userSchema);
