//desiging the table
import React from 'react'
import { Link } from 'react-router-dom'

const CreateTable = (props) => {
    const getTableRows = () => {
        return props.forms.map((item, i) => {
            return (
                <tbody key={i}>
                    <tr>
                            <td>{i}</td>
                            <td>{item.name}</td>
                            <td>{item.noSubmissions}</td>
                            <td><Link to={`/submit/${i}`}>View</Link></td>
                            <td><Link to={`/submissions/${i}`}>View</Link></td>
                    </tr>
                </tbody>
            )
        })
    }
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Form Id</th>
                        <th>Form Name</th>
                        <th># Submissions</th>
                        <th>Submit Page</th>
                        <th>Submissions Page</th>
                    </tr>
                </thead>
                {getTableRows()}
            </table>
        </div>
    )
}

export default CreateTable