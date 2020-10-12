const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

// pengguna body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// pengguna body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// pengguna cors agar end point dapat diakses oleh cross platform
app.use(cors())


app.post("/bujur_sangkar", (req,res) => {

    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)
   
    let response = {
        panjang : panjang,
        lebar : lebar,
        luas : luas,
        keliling : keliling
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

//menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000")
})