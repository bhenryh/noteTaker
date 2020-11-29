const express = require("express");
const app = express();
const htmlRoutes = require("./routes/htmlRoutes.js")
const PORT = process.env.PORT || 3000;
const apiRoutes = require("./routes/apiRoutes.js")

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);
app.listen(PORT,()=>{
    console.log('Listenning at port'+PORT)
});
