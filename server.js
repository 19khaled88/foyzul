import { Server } from "http";
import dotenv from "dotenv";
import mongoose from "mongoose";
import config from "./config/index.js";

dotenv.config();


const connectDb = async (app) => {
  try {
    await mongoose.connect(config.database_url);
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });

    console.log("Server connected");
  } catch (error) {
    console.log("server connection failed");
  }
};
export default connectDb

//syncrhonous process
// async function main(){
//     try {
//         await mongoose.connect(config.database_url)
//         server = app.listen(config.port,()=>{
//             console.log(`Server running on port ${config.port}`)
//         })

//         console.log('Server connected')

//     } catch (error) {
//         console.log("server connection failed")
//     }
// }

// main()
