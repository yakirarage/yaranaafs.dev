const express = require("express")
const app = express();
const port = 55127

app.use(express.static("static"))
app.set("view engine", "ejs")

app.get("/", (req,res) => {
    res.status(200).render(__dirname + "/pages/index.ejs", {
        title: 'Home', 
        iconLoc: '/images/logo.jpg', 
        desc: "The personal website of a 19 year old developer.", 
        url: 'https://yaranaafs.dev/'
    })
})

app.listen(port, () => console.log(`app is listening to ${port}`))