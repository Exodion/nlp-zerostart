const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const {analyze} = require("./analyze.js")

//config env
dotenv.config();
const key = process.env.API_KEY;

app.use(cors());
port = 8000;

app.use(express.json());
app.use(express.static('dist'));

//reading incoming json
app.get("/",(req,res) => {

    res.render("index.html")

})

app.post("/", async (req,res) => {
    const url = req.body.URI;
    console.log(url);
    
    //if (input == undefined){input = "http://udacity.com"}

    const Analyze = await analyze(url, key);
    //console.log(Analyze);
    const {code, msg, sample} = Analyze

    if(code == 100 || code == 212){
        return res.send({msg:msg, code:code})
    }

    return res.send({
        sample: sample,
        code: code
    })
    
})

app.listen(port, () => console.log(`server is listening on port ${port}`))

