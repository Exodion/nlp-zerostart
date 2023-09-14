const axios = require("axios")
const meaningCloud = "https://api.meaningcloud.com/sentiment-2.1";

const analyze = async (url, key) =>{
    //console.log("my info");
    console.log(`url: ${url}, key: ${key}`);

     const check = await axios.get(`${meaningCloud}?key=${key}&url=${url}&lang=en`)
    .then(res => {
        
        console.log(res.data)
        
    })

        console.log(check)
}

module.exports = {analyze};