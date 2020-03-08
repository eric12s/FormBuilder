import React, { useState } from 'react'
import {
  withRouter
} from 'react-router-dom'

import Comms from './services/server_communication.js'

const FormWizard = (props) => {
  const [fields, setFields] = useState([])
  //const [fieldSet, setSet] = useState(new Set())
  const [newLabel, setNewLabel] = useState('')
  const [newName, setNewName] = useState('')
  const [newInputType, setNewInputType] = useState('')
  const [newFormName, setNewFormName] = useState('')
  const [formId, setFormId] = useState(1)

  // useEffect(() => {
  //     props.setForms(props.forms)
  // }, [props.forms])

  const addField = (event) => {
    // if(fieldSet.has(newLabel))
    //     return alert(`${newLabel} is already in exist`)

    const field = { name: newName, label: newLabel, inputType: newInputType || 'text' }
    console.log(newLabel)
    setFields(fields.concat(field))
    //setSet(field.label)
    setNewName('')
    setNewLabel('')
    setNewInputType('')
  }

  const addForm = (event) => {
    event.preventDefault()
    const form = {
      name: newFormName,
      fields: fields,
      // id: formId,
      noSubmissions: 0
    }

    Comms.create(form)
      .then((form) => {
        console.log(form)
        props.setForms(props.forms.concat(form))
      }).catch(error => console.log(error))
    setNewFormName('')
    setFields([])
    setFormId(formId + 1)
    props.history.push('/table')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleLabelChange = (event) => {
    setNewLabel(event.target.value)
  }
  const handleInputTypeChange = (event) => {
    setNewInputType(event.target.value)
  }
  const handleFormNameChange = (event) => {
    setNewFormName(event.target.value)
  }

  return (
    <div>
      <h1>Add new field</h1>
      <form onSubmit={addField}>
        <div>
                    field label:<input type="text" value={newLabel} onChange={handleLabelChange}></input>
                    input name:<input type="text" value={newName} onChange={handleNameChange}></input>
                    input type:<select value={newInputType} onChange={handleInputTypeChange}>
            <option value="text">text</option>
            <option value="color">color</option>
            <option value="date">date</option>
            <option value="email">email</option>
            <option value="tel">telephone</option>
            <option value="number">number</option>
          </select>
          <br></br>
          <button type="submit">Add Field</button>
        </div>
      </form>
      <ul>
        {fields.map((item, i) => <li key={i}>{item.label} {item.name} {item.inputType}</li>)}
      </ul>

      <form onSubmit={addForm}>
        <div>
                    Form Name:<input value={newFormName} onChange={handleFormNameChange}></input>
          <br></br>
          <button type="submit">Save</button>
        </div>
      </form>            </div>
  )
}

export default withRouter(FormWizard)
