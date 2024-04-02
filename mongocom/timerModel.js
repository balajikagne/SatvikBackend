const mongoose = require("mongoose");

const UoodSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId,auto: true },
    orderId:{type:String},
    timer:{type:Number}
}, {
    timestamps: true,
});

let UenCard = new mongoose.model("timers", UoodSchema);
module.exports = UenCard;
