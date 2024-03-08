const Category = require("../models/categoryModel");
const imageCategory = require("../models/imageCategoryModel");

exports.addCategory = async(req,res)=>{

    const {categoryName} = req.body;
    try{
        const category = await Category.create({
            categoryName
        })
        await res.status(200).json(category)
    }catch(err){
        res.status(400).json(err)
    }
}

exports.linkCategoryToImage=async(req,res)=>{

    const {testCategoryId,testGalleryId}= req.body;

    try{
        
        const ig = await imageCategory.create({
            testCategoryId,
            testGalleryId
        })

        res.status(200).json(ig);

    }catch(err){
        res.status(400).json(err);
    }

}