const express = require("express")
const app = express();
const port = 3000

app.use(express.static("static"))
app.set("view engine", "ejs")

app.get("/", (req,res) => {
    res.status(200).render(__dirname + "/pages/index.ejs")
})

app.listen(port, () => console.log(`app is listening to ${port}`))