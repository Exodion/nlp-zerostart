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

//reading incoming json
app.get("/",(req,res) => {

    res.send("ok")

})

app.post("/", async (req,res) => {
    const {input} = req.body;
    console.log(input);
    const Analyze = analyze(input, key);
    console.log(Analyze);
})

app.listen(port, () => console.log(`server is listening on port ${port}`))