const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { stat } = require("fs")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get("/bmi", (req,res) => {
    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat)
    let bmi = berat / (tinggi**2)
    let status = []

    if(bmi >= 30){
        status.push("Kegemukan (Obesitas)")
    }else if (bmi >= 25){
        status.push("Kelebihan berat badan")
    }else if (bmi >= 18.5){
        status.push("Normal (Ideal)")
    }else {
        status.push("Kekurangan berat badan")
    }

    let response = {
        tinggi: tinggi,
        berat: berat,
        bmi: bmi,
        status: status[0]
    }
    res.json(response)
})
app.listen(8080,() => {
    console.log("Server run on port 8080");
})
