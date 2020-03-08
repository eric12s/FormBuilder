  
import axios from 'axios'

const baseUrl = 'https://form-builder-proj.herokuapp.com'

function readAll() {
  return (
    axios.get(`${baseUrl}/forms`)
      .then(response => response.data)
      .catch(error => console.log(error))
  )
}

function read(id='') {
    return (
      axios.get(`${baseUrl}/forms/${id}`)
        .then(response => response.data)
        .catch(error => console.log(error))
    )
  }

function create(form) {
  return (
    axios.post(`${baseUrl}/forms`, form)
      .then(response => response.data)
      // .catch(error => error)
  )
}

function patch(form) {
  console.log(form)
  return (
    axios.patch(`${baseUrl}/${form.id}`, form)
      .then(request => request.data)
      // .catch(error => console.log(error))
  )
}

function createImpl(formImpl){
  return(
    axios.post(`${baseUrl}/formImpls/`)
    .then(response => response.data)
    .catch(error => console.log(error))
  )
}



export default {readAll, read, create, patch, createImpl}