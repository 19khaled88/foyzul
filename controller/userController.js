import express from "express";
import {
    deleteService,
  getService,
  postService,
  updateService,
} from "../services/userService.js";


const router = express.Router();

const getHandler = async (req, res) => {
  try {
    const result = await getService();
    res.send({
        message:'All user found',
        result
    });
  } catch (error) {
    res.send(error);
  }
};

const postHandler = async (req, res) => {
  const body = req.body;

  try {
    const result = await postService(body);
    res.send({
        message:'new user created successfully',
        result
    });
  } catch (error) {
    res.send(error);
  }
};

const updateHandler = async (req, res) => {
  const options = {
    id: req.params.id,
    body: req.body,
  };
  try {
    const result = await updateService(options);
    res.send({
        message:'updated successfully',
        result
    });
  } catch (error) {
    res.send(error);
  }
};

const deleteHandler=async(req,res)=>{
    const id = req.params.id
    // try {
    //     const result = await deleteService(id)
    //     res.send({
    //         message:'deleted successfully',
    //         result
    //     })
    // } catch (error) {
    //     res.send(error)
    // }
    const result = await deleteService(id)
    if(result instanceof Error){
        res.status(404).send({error:result.message})
    }else{
        res.status(200).send('User deleted')
    }
}

router.get("/", getHandler);
router.post("/", postHandler);
router.put("/:id", updateHandler);
router.delete('/:id',deleteHandler)

const configure = (app) => {
  app.use("/users", router);
};

export default configure;
