const mongoose = require("mongoose");
const UoodSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Fixed the 'require' typo
    _id: { type: mongoose.Schema.Types.ObjectId,auto: true },
    prices: {type:Number,required:true},
    prices: {type:Number,required:true},
    img: { type: String, required: true },
    dsc: { type: String, required: true },
    rate: { type: Number, required: true },
    category: { type: String, required: true },
    location: { type: String },
    stock: { type: Boolean }
}, {
    timestamps: true,
});

let UenCard = new mongoose.model("menus", UoodSchema);
module.exports = UenCard;
