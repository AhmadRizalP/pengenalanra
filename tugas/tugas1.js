const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// end-point 1
app.get("/kubus",(req,res) => {
    let panjang = Number(req.body.panjang)
    let luas = panjang * panjang
    let volume = 6 * panjang * panjang

    let response = {
        panjang_sisi: panjang,
        luas_permukaan: luas,
        volume: volume
    }
    res.json(response)
})

// end-point 2
app.get("/balok",(req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)
    let luas = (2*panjang*lebar)+(2*panjang*tinggi)+(2*lebar*tinggi)
    let volume = panjang*lebar*tinggi

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luas_permukaan: luas,
        volume: volume
    }
    res.json(response)
})

// end-point 3
app.get("/tabung",(req,res) => {
    let jari_jari = Number(req.body.jari_jari)
    let tinggi = Number(req.body.tinggi)
    let luas = 2 * 3.14 * jari_jari * (tinggi+jari_jari)
    let volume = 3.14 * (jari_jari**2) * tinggi

    let response = {
        jari_jari: jari_jari,
        tinggi: tinggi,
        luas_permukaan: luas,
        volume: volume
    }
    res.json(response)
})

// end-point 4
app.get("/kerucut",(req,res) => {
    let jari_jari = Number(req.body.jari_jari)
    let tinggi = Number(req.body.tinggi)
    let luas = 3.14 * (jari_jari**2) + 3.14 * jari_jari * (Math.sqrt((tinggi**2) + (jari_jari**2)))
    let volume = 1/3 * 3.14 * (jari_jari**2) * tinggi

    let response = {
        jari_jari: jari_jari,
        tinggi: tinggi,
        luas_permukaan: luas,
        volume: volume
    }
    res.json(response)
})
app.listen(8080,() => {
    console.log("Server run on port 8080")
})