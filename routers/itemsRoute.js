const express =require("express")
const router=express.Router();
const Items=require('../mongocom/menuItem')
const User=require("../mongocom/userModel");
const nofify=require("../mongocom/nofityMe")
// const schedule = require('node-schedule');
const Timer=require("../mongocom/timerModel")
router.get('/getallitems',async (req,res)=>{
    try {
        const Item = await Items.find({});
        console.log(Item)
        res.send(Item);
    }
    catch(error){
        return res.status(400).json({message:error})
    }
})


router.post('/deleteitem',async (req,res)=>{
    const itemId=req.body.itemId;
    console.log("hellow world")
    try{

        await Items.findOneAndDelete({_id:itemId})
        res.status(201).send("Item deleted")
        
    }
    catch(error){
        res.status(400).json({message:error})
        error:error.stack
       
    }
})

router.post('/itemlistin',async (req,res)=>{
    const itemId=req.body.itemId;
    // const itemName = ' Chiken crispy burger'; // Replace with the actual item name

    try {
        const filter = {name:itemId};

        // Use findOne to get a single document
        const item = await Items.findOne(filter);

        if (item) {
            // Update the property on the individual document
            item.stock = true;

            // Save the document
            await item.save();

            // console.log("Document modified:", item);
            res.status(201).send("modified");
        } else {
            console.log("Document not found");
            res.status(404).send("Document not found");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
})
router.post('/itemlistout', async (req, res) => {
    const itemId=req.body.itemId;// Replace with the actual item name

    try {
        const filter = {name:itemId};

        // Use findOne to get a single document
        const item = await Items.findOne(filter);

        if (item) {
            // Update the property on the individual document
            item.stock = false;

            // Save the document
            await item.save();

            // console.log("Document modified:", item);
            res.status(201).send("modified");
        } else {
            console.log("Document not found");
            res.status(404).send("Document not found");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
module.exports=router;