const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

//END-POINT 1 (Decimal)
app.get("/decimal",(req,res) => {
    let decimal = Number(req.body.decimal)
    let bin = decimal.toString(2)
    let oct = decimal.toString(8)
    let hex = decimal.toString(16).toUpperCase()
    let response = {
        decimal: decimal,
        result: {
            biner: bin,
            octal: oct,
            hexadecimal: hex
        }
    }
    res.json(response)
})

//END-POINT 2 (Binner)
app.get("/biner",(req,res) => {
    let bin = Number(req.body.biner)
    let dec = parseInt(bin , 2)
    let oct = dec.toString(8)
    let hex = dec.toString(16).toUpperCase()

    let response = {
        biner: bin,
        result: {
            decimal: dec,
            octal: oct,
            hexadecimal: hex
        }
    }
    res.json(response)
})

//END-POINT 3 (Octal)
app.get("/octal",(req,res) => {
    let oct = Number(req.body.octal)
    let dec = parseInt(oct , 8)
    let bin = dec.toString(2)
    let hex = dec.toString(16).toUpperCase()

    let response = {
        octal: oct,
        result: {
            decimal: dec,
            binner: bin,
            hexadecimal: hex
        }
    }
    res.json(response)
})

//END-POINT 4 (Hexadecimal)
app.get("/hexadecimal",(req,res) => {
    let hex = (req.body.hexadecimal)
    let dec = parseInt(hex , 16)
    let bin = dec.toString(2)
    let oct = dec.toString(8)

    let response = {
        hexadecimal: hex,
        result: {
            decimal: dec,
            binner: bin,
            octal: oct
        }
    }
    res.json(response)
})
app.listen(8080,() => {
    console.log("Server run on port 8080");
})