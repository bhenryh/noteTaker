// Dependencies:
const express = require("express");
const app = express();

// Routes:
const htmlRoutes = require("./Routes/htmlRoutes.js");
const apiRoutes = require("./Routes/apiRoutes.js");
// Port:
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => {
    console.log("Listening at port" + PORT)
});
