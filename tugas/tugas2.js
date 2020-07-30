const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

//END-POINT 1
app.get("/convert/celcius/:suhu",(req,res) => {
    let suhu = req.params.suhu
    
    let reamur = 4 / 5 * suhu
    let fahrenheit = 9 / 5 * suhu + 32
    let kelvin = suhu * 1 + 273

    let response = {
        celcius: suhu,
        result: {
            reamur: reamur,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }
    res.json(response)
})

//END-POINT 2
app.get("/convert/reamur/:suhu",(req,res) => {
    let suhu = req.params.suhu
    
    let celcius = 5 / 4 * suhu
    let fahrenheit = 9 / 4 * suhu + 32
    let kelvin = 5 / 4 * suhu + 273

    let response = {
        reamur: suhu,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }
    res.json(response)
})

//END-POINT 3
app.get("/convert/kelvin/:suhu",(req,res) => {
    let suhu = Number (req.params.suhu)
    
    let celcius = suhu - 273
    let fahrenheit = 9 / 5 * (suhu - 273) + 32
    let reamur = 4 / 5 * (suhu - 273)

    let response = {
        kelvin: suhu,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            reamur: reamur
        }
    }
    res.json(response)
})

//END-POINT 4
app.get("/convert/fahrenheit/:suhu",(req,res) => {
    let suhu = req.params.suhu

    let celcius = 5 / 9 * (suhu - 32) 
    let reamur = 4 / 9 * (suhu - 32)
    let kelvin = 5 / 9 * (suhu - 32) + 273

    let response = {
        fahrenheit: suhu,
        result: {
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin
        }
    }
    res.json(response)
})
app.listen(8080, () => {
    console.log("Server run on port 8080")
})