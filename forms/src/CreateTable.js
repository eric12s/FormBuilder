//desiging the table
import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

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
        <div className="table table-striped">
            <table>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Form Id </th>
                        <th scope="col">Form Name </th>
                        <th scope="col"># Submissions </th>
                        <th scope="col">Submit Page </th>
                        <th scope="col">Submissions Page </th>
                    </tr>
                </thead>
                {getTableRows()}
            </table>
        </div>
    )
}

export default CreateTable