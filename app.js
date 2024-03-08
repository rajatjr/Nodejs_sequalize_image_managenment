const express = require("express");
const server = require("./server");
const app = express();
const userRoutes =require("./routes/userRoutes");
const galleryRoutes =require("./routes/galleryRoutes");
const categoryRoutes =require("./routes/categoryRoutes");



app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.set("view engine","ejs");


app.use(express.static('upload'))
app.use(express.static('views'))



app.get("/",(req,res)=>{
    res.render("loginPage.ejs");
})
app.get("/register",(req,res)=>{
    res.render("register.ejs");
})
app.get("/home",(req,res)=>{
    res.render("home.ejs");
})






app.use("/user",userRoutes);
app.use("/gallery",galleryRoutes);
app.use("/category",categoryRoutes);


app.use(server);

app.listen(8000,()=>{
    console.log("listening at port 8000");
});