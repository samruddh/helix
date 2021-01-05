import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class EmployeeTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee() {
        axios.delete('http://localhost:8000/emp/delete-employee/' + this.props.obj._id)
            .then((res) => {
                console.log('Employee successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.employee_ID}</td>
                <td>{this.props.obj.employee_Name}</td>
                <td>{this.props.obj.employee_Address}</td>
                <td>{this.props.obj.employee_EmailID}</td>
                <td>{this.props.obj.employee_Mobile}</td>
                <td>{this.props.obj.employee_Division}</td>
                <td>
                    <Link className="edit-link"  to={"/Edit-employee/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteEmployee} style={{marginTop:'25px'}} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}