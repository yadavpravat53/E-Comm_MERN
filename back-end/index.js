const express=require('express');
const cors=require('cors');
require('./db/config');
const User=require("./db/Users");

const app=express();

app.use(express.json());
app.use(cors());

app.post('/signup',async (req,res)=>{
    let user=new User(req.body);
    let result=await user.save();
    result =result.toObject();
    delete result.password;
    res.send(result);
})

app.post('/login',async (req,res)=>{
    // res.send(req.body);
    if(req.body.password && req.body.email){
        let user=await User.findOne(req.body).select("-password");
        if(user)
            res.send(user);
        else
            res.send({result:"No User Found"})
    }else{
        res.send({result:"No User Found"})
    }
    
})

app.listen(5000);












// const express=require('express');
// const mongoose=require('mongoose');

// const app=express();

// const connectDB=async ()=>{
//     mongoose.connect('mongodb://localhost:27017/E-Commerce');
//     const productSchema=new mongoose.Schema({});
//     const productModel = mongoose.model('products',productSchema);
//     const data=await productModel.find();
//     console.log(data);
// }
// connectDB();

// app.get('/',(req,res)=>{
//     res.send('Hello World');
// })

// app.listen(5500);