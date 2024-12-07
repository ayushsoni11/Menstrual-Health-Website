import  app from "./app.js"
import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_SECRET_KEY,

})

// Creating a server to run on port
app.listen( process.env.PORT , ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

console.log(process.env.CLOUDINARY_SECRET_KEY)