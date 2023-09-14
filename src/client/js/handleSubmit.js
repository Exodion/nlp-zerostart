import axios from 'axios'

const input = document.querySelector("form input")
const form = document.querySelector('form')

console.log(input)

const handleSubmit = async (event) => {

    event.preventDefault()
    
    const {data} = await axios.post('http://localhost:8000/', form, {
        headers: {
          'Content-Type': 'application/json'
        }
      })


    console.log(input.value)

}



export{handleSubmit}