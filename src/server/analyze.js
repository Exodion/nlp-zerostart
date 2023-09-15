const axios = require("axios");
const {response} = require("express");
const meaningCloud = "https://api.meaningcloud.com/sentiment-2.1";

const analyze = async (url, key) =>{
    //console.log("my info");
    console.log(`url: ${url}, key: ${key}`);
    
     const check = await axios.get(`${meaningCloud}?key=${key}&url=${url}&lang=en`)
    .then(res => {
        
        const {code} = response.data.status
        const {message} = response.data.status
        console.log(res.data)
        //console.log(code) 
        if (code == 100){
            return manageError(code, "Enter a valid url")

        }

        else if (code == 212){
            return messageError(code, message)
        }
        return manageSuccess(response.data, code)
    })

        console.log(check)
        console.log(`url: ${url}, key: ${key}`);
        return check
}



const manageError = (code, message) =>{

    const error = {
        code,
        message

    }

    return error
}

const manageSuccess = (data, code) =>{
    const {agreement, subjectivity, confidence, score_tag, irony} = data
    const sample = {
        agreement,
        subjectivity,
        confidence,
        score_tag,
        irony

    }

    const result ={
        sample,
        code

    }

    return result
}

module.exports = {analyze};