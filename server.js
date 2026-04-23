const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/lostfound")
.then(()=>console.log("DB Connected"))
.catch(err=>console.log(err));

app.get("/", (req,res)=>{
  res.send("API Working");
});

const authRoutes = require("./routes/auth");
const itemRoutes = require("./routes/items");

app.use("/api", authRoutes);
app.use("/api", itemRoutes);

app.listen(5000, ()=>console.log("Server running"));