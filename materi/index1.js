const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get("/profile/:name/:age",(req,res) => {
    let name = req.params.name
    let age = req.params.age
    let response = {
        nama: name,
        umur: age
    }
    res.json(response)
}
)

app.listen(8080,() => {
    console.log("Server run on port");
})