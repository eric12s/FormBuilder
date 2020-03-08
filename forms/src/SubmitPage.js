import React, { useState } from 'react'
import Comms from './services/server_communication.js'
import 'bootstrap/dist/css/bootstrap.css'

const SubmitPage = (props) => {
    const [values, setValues] = useState([''])
    const [inputFields, setInputFields] = useState(props.fields)
    const [count, setCount] = useState(0)
    const formImpl = {}

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        
        const formImpl = {
            id: 5,
            name: "dfsdf",
            phone: "sdfdf",
            originId: props.id
        }

        // Comms.createImpl(formImpl)
        // .then((formImpl) => {
        //     console.log(formImpl)
        // }).catch(error => console.log(error))   
    }

    const handleValueChange = (event) => {
        //setValues(values[count]=event.target.value)
    }
    //adding key
    return( 
        <form onSubmit={handleSubmit} className="container">
            <h1>{props.formName}</h1>
                {Object.keys(props.fields).map((i) => {
                    return (
                        <div key={i}>
                            {props.fields[i].name}<input type={props.fields[i].inputType} value={values[i]} onChange={handleValueChange}/>
                        </div>
                    )
                })}
                <button type="submit" className="btn btn-primary">Save</button>
          </form>
    )

}

export default SubmitPage