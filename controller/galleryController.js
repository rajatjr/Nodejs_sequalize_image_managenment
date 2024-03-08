const Gallery = require("../models/galleryModel");
const path = require("path");

exports.createGalleryImage = async(req,res)=>{
    
    const {name,id} = await req.body;
    
    const imageUrl =path.join(__dirname,'../upload',req.file.filename);

    try{
        const image = await Gallery.create({
            imageUrl,
            name,
            testUserId:id,
        })
        // res.sendFile(imageUrl);
 
      return res.render("home",{data:image.testUserId,image:"/"+req.file.filename})
    }catch(err){
        res.status(400).json(err);
    }
}

exports.getAllImages = async(req,res)=>{
    
    const {id} =req.params;   

    
        try{      
           
            const gallery = await Gallery.findAll({
                    where:{testUserId:id},                
            }); 
            
            const images = gallery.map((i)=>{
                const imageUrl = i.imageUrl.split('/');
                const imageName = "/"+imageUrl[imageUrl.length-1];
                return imageName;
            })
            

            // res.send(images)
           
        return  res.render("gallery",{image:images})
          
        }catch(err){
            res.status(400).json(err);
        }
    
}

// exports.createGalleryImage = async(req,res)=>{
    
//     const {imageUrl,name} = await req.body;

//     try{
//         const user = await Gallery.create({
//             imageUrl,
//             name,
//         })
//        return res.status(200).json(user);
//     }catch(err){
//         res.status(400).json(err);
//     }
// }



exports.linkImageToUser = async(req,res)=>{
    const {id,userId} = req.body;

    try{
        const image = await Gallery.findOne({where:{id}})
        console.log(image);
        image.testUserId = userId;
        image.save();
        res.status(200).json(image);
    }catch(e){
        res.json(e);
    }



}