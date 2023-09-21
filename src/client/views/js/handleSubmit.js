import axios from 'axios'


const input = document.getElementById("URI");
const form = document.querySelector('form')

console.log(input)

const handleSubmit = async (event) => {

    event.preventDefault()
    
    const {data} = await axios.post('http://localhost:8000/', form, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

    const {msg, sample} = data

    console.log(data.msg)
    if (data.msg == undefined){
      data.msg = "please enter an URL";
    }

    const error = document.querySelector("#errormsg")
    error.innerHTML = data.msg

    show_results(sample)

    return data.msg;

}

const show_results = (sample) => {
  
  document.getElementById("agreement").innerHTML = `Agreement: ${sample.agreement}`;
  document.getElementById("subjectivity").innerHTML = `Subjectivity: ${sample.subjectivity}`;
  document.getElementById("confidence").innerHTML = `Confidence: ${sample.confidence}`;
  document.getElementById("irony").innerHTML = `Irony: ${sample.irony}`;
  document.getElementById("score_tag").innerHTML = `Score Tag: ${sample.score_tag}`;

}


export{handleSubmit}