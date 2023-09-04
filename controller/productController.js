const ProductModel = require('../model/products')
const { findById } = require('../model/users')

const getProducts = async()=>{
    const products= await ProductModel.find({})
    return products
}

const getProductID = async(_id) =>{
    return await ProductModel.findById(_id);
}

const createProduct=async(product)=>{
const newProduct = new ProductModel(product)
return newProduct.save()
}

const updateProduct = async(_id, product) =>{
    return await ProductModel.findByIdAndUpdate({_id}, product, {
        upsert: false,
        new: true
    })
}

const deleteProduct = async(_id)=>{
    return await ProductModel.findByIdAndDelete(_id)
}

module.exports ={
    getProducts,
    getProductID,
    createProduct,
    updateProduct,
    deleteProduct
}