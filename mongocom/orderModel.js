const mongoose =require ("mongoose")
const orderSchema=new mongoose.Schema({
    name:{type:String,require},
    mobNumber:{type:String,require},
    userid:{type:String},
    orderItems:[],
    time:{type:String},
    orderAmount:{type:Number},
    shippingAddress:{type:Object,require},
    isDelivered:{type:Boolean,require,default:false},
    dateis: { type: String, default: () => new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }) }
},{
    timestamps:true
})

module.exports=new mongoose.model('userorders',orderSchema)
