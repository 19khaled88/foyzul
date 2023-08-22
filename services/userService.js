import models from "../models/index.js";
import User from "../models/user.js";

export const getService = async () => {
  const users =await User.find()
  return users
};

export const postService = async (body) => {
  const create = new models.User({
    username:body.username,
    createdAt:new Date()
  });
  const result = await create.save();
  return result;
};

export const updateService =async(options)=>{
    console.log(options)
    const updated =await User.findByIdAndUpdate({_id:options.id},options.body,{new:true})
    return updated
}

export const deleteService=async(id)=>{
    const isExist =await User.findById(id)
    if(isExist){
        const deleted =await User.deleteOne({_id:id})
        return deleted 
    }
    return new Error('User not found for this id')
    
}