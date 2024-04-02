const mongoose=require("mongoose")

const Notify=new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId,auto: true },
    img:{type:String},
    headline:{type:String},
    paragraph:{type:String},
    linkDir:{type:String}
}, {
    timestamps: true,
})
let NotifyMe = new mongoose.model("offerlist", Notify);
module.exports = NotifyMe;