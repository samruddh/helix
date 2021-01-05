import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateEmployee extends Component {

  constructor(props) {
    super(props)

    this.onChangeEmployeeID = this.onChangeEmployeeID.bind(this);
    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeEmployeeAddress = this.onChangeEmployeeAddress.bind(this)
    this.onChangeEmployeeEmail = this.onChangeEmployeeEmail.bind(this);
    this.onChangeEmployeeMobile = this.onChangeEmployeeMobile.bind(this);
    this.onChangeEmployeeDivision = this.onChangeEmployeeDivision.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      employee_ID : '',
      employee_Name : '',
      employee_Address : '',
      employee_EmailID : '',
      employee_Mobile :'',
      employee_Division :''
    }
  }
  onChangeEmployeeID(e) {
    this.setState({ employee_ID: e.target.value })
  }

  onChangeEmployeeName(e) {
    this.setState({ employee_Name: e.target.value })
  }

  onChangeEmployeeAddress(e) {
    this.setState({ employee_Address: e.target.value })
  }

  onChangeEmployeeEmail(e) {
    this.setState({ employee_EmailID: e.target.value })
  }

  onChangeEmployeeMobile(e) {
    this.setState({ employee_Mobile: e.target.value })
  }

  onChangeEmployeeDivision(e) {
    this.setState({ employee_Division: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    const employeeObject = {
      employee_ID: this.state.employee_ID,
      employee_Name: this.state.employee_Name,
      employee_Address: this.state.employee_Address,
      employee_EmailID: this.state.employee_EmailID,
      employee_Mobile: this.state.employee_Mobile,
      employee_Division:this.state.employee_Division
    };

    axios.post('http://localhost:8000/emp/create-employee', employeeObject)
      .then(res => console.log(res.data));

    this.setState({
      employee_ID: '',
      employee_Name: '',
      employee_Address: '',
      employee_EmailID: '',
      employee_Mobile:'',
      employee_Division:''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Id">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" value={this.state.employee_ID} onChange={this.onChangeEmployeeID} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.employee_Name} onChange={this.onChangeEmployeeName} />
        </Form.Group>

        <Form.Group controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={this.state.employee_Address} onChange={this.onChangeEmployeeAddress} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" value={this.state.employee_EmailID} onChange={this.onChangeEmployeeEmail} />
        </Form.Group>

        <Form.Group controlId="Mobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="text" value={this.state.employee_Mobile} onChange={this.onChangeEmployeeMobile} />
        </Form.Group>

        <Form.Group controlId="Division">
          <Form.Label>Division</Form.Label>
          <Form.Control type="text" value={this.state.employee_Division} onChange={this.onChangeEmployeeDivision} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Submit Employee details
        </Button>
      </Form>
    </div>);
  }
}
