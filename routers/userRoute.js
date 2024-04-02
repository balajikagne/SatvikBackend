const express=require('express');
const router =express.Router();
const User=require("../mongocom/userModel");
const Address=require('../mongocom/userDatails')
router.post("/register",(req,res)=>{
    const {name,mobNumber,password}=req.body
    const newUser= new User({name,mobNumber,password})

    try {
        newUser.save()
        res.send('User Registered successfully')
    }
    catch(error)
    {
        return res.status(400).json({message:error})
    }
});
router.post("/useraddress",(req,res)=>{
    const {userid,name,surname,location,email,mobile,shippingAddress}=req.body
    const newUser= new Address({userid,name,location,email,surname,mobile,shippingAddress})

    try {
        newUser.save()
        res.send('User Registered successfully')
    }
    catch(error)
    {
        return res.status(400).json({message:error})
    }
});
router.post("/updateuseraddress",(req,res)=>{
    const {userid,name,surname,location,email,mobile,shippingAddress}=req.body
    
      
    try {
        Address.findOneAndUpdate(
            { userid: userid },
            { $set: { name, location, email, surname, mobile ,shippingAddress} }, 
            { new: true, upsert: true }
          )
            .then(updatedAddress => {
            //   console.log('Address updated:', updatedAddress);
              // Handle success or additional logic here
            })
            .catch(error => {
            //   console.error('Error updating address:', error);
              // Handle errors here
            });
            // Address.save();
        res.send('User Registered successfully')
    }
    catch(error)
    {
        return res.status(400).json({message:error})
    }
});
router.post("/useraddressData",async(req,res)=>{
    const {userId}=req.body;
    try{
        const user =await Address.find({userid:userId})
        if (user.length>0){
            const currentUser={
                name:user[0].name,
                location:user[0].location,
                mobNumber:user[0].mobile,
                email:user[0].email,
                surName:user[0].surname,
                shippingAddress:user[0].shippingAddress,
                _id:user[0]._id
            }
            res.send(currentUser);
        }
        else{
            return res.status(400).json({message :'User Login Failed'});
        }
    }catch(error)
    {
        return res.status(400).json({massage:'Something went wrong'});
    }
})

router.post("/login",async(req,res)=>{
    const {mobNumber,password}=req.body
    try{
        const user =await User.find({mobNumber,password})
         
        if (user.length>0){
            const currentUser={
                name:user[0].name,
                // location:user[0].location,
                mobNumber:user[0].mobNumber,
                isAdmin:user[0].isAdmin,
                _id:user[0]._id
            }
            res.send(currentUser);
        }
        else{
            return res.status(400).json({message :'User Login Failed'});
        }
    }catch(error)
    {
        return res.status(400).json({massage:'Something went wrong'});
    }
})

// router.get("/getallusers", async (req,res)=>{
//     try{
//         const users=User.find({})
//         res.status(200).send(users);
//     }
//     catch(error){
//         res.status(404).json({message:error.stack})
//     }
// })
module.exports=router;
