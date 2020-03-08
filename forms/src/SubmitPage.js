import React, { useState } from 'react'
import Comms from './services/server_communication.js'

const SubmitPage = (props) => {
    const [values, setValues] = useState([''])
    const [inputFields, setInputFields] = useState(props.fields)
    const [count, setCount] = useState(0)
    const formImpl = {}

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(values)
        
        const formImpl = {
            id: 5,
            name: "dfsdf",
            phone: "sdfdf"
        }

        Comms.createImpl(formImpl)
        .then((formImpl) => {
            console.log(formImpl)
        }).catch(error => console.log(error))   
    }

    const handleValueChange = (event) => {
        values[count] = event.target.value
        setCount(count + 1)
    }
    //adding key
    return( 
        <form onSubmit={handleSubmit}>
            <h1>{props.formName}</h1>
                {Object.keys(props.fields).map((item, i) => {
                    return (
                        <div key={i}>
                            {props.fields[i].name}:<input type={props.fields[i].inputType} value={values[i]} onChange={handleValueChange}/>
                            <br></br>
                        </div>
                    )
                })}
                <button type="submit">Save</button>
          </form>
    )

}

export default SubmitPage