const Category = require("../models/categoryModel");
const Gallery = require("../models/galleryModel");
const User = require("../models/userModel")



exports.createUser = async(req,res)=>{
    
    const {name,email,password} = await req.body;

    try{
        const user = await User.create({
            name,
            email,
            password,
        })
        res.status(200).render("loginPage.ejs")
    //    return res.status(200).json(user);
    }catch(err){
        res.status(400).json(err);
    }
}

exports.getUsersById = async(req,res)=>{
    try{      

        const {id} =req.body;

        const user = await User.findAll({
            include:{
                model:Gallery,
                where:{testUserId:id},
                include:{
                    model:Category
                }
            }
        });       
        return res.status(200).json(user);
    }catch(err){
        res.status(400).json(err);
    }
}

exports.getUsers = async(req,res)=>{
    
    try{      
        const user = await User.findAll({
            include:{
                model:Gallery,
                include:{
                    model:Category
                }
            }
        });       
        return res.status(200).json(user);
    }catch(err){
        res.status(400).json(err);
    }
}

exports.login =async(req,res)=>{

    const {email,password} = await req.body;

    try{      
        const user = await User.findOne({where:{
            email
         }});     
        if(user){      
            if(user.password == password){
            res.status(200).render("home.ejs",{data:user.id,image:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="})
            // res.status(200).json(user.id)
        }else{
            return res.status(400).json("Invalid Credentials");
        }
    }else{
        res.status(400).json("No user found");
    }
         
    }catch(err){
        res.status(400).json(err);
    }
}



