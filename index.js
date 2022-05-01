const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

app.post("/mainpage",(req,res) => {
    var passkaro = req.body.passcrow;
    console.log(typeof(passkaro))

    if (passkaro === "DARA" || passkaro === "ALBERTEINSTEIN" || passkaro ===  "MARILYNMONROE" || passkaro === "WALDO" ||passkaro === "TINTIN" ||passkaro === "MRINDIA" ||passkaro === "TAEHYUN" ||passkaro === "BUGSBUNNY" ||passkaro === "TELETUBBY" ||passkaro === "SABUINCHACHACHOUDHARY" ||passkaro === "SHUTTLECOCK" ||passkaro === "HELA" ||passkaro === "ALBUSDUMBLEDORE") {
        return res.redirect("main.html");
    }
    else{
        return res.redirect("index.html");
    }
})

app.get("/",(req,res) => {
    return res.redirect('index.html');

}).listen(5432);
console.log("listening on port 5432");