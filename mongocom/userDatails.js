const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:{type:String,require},
    userid:{type:String,require},
    surname:{type:String,require},
    // bdate:{type:String,require},
    location:{type:String,require},
    shippingAddress:{type:String,require},
    mobile:{type:String,require},
    email:{type:String,require},
    isAdmin:{type:Boolean,require ,default:false},
},{
    timestamps:true,
}
)
module.exports=new mongoose.model('useraddress',userSchema);