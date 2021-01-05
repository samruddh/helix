import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditEmployee extends Component {

  constructor(props) {
    super(props)

    this.onChangeEmployeeID = this.onChangeEmployeeID.bind(this);
    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeEmployeeAddress = this.onChangeEmployeeAddress.bind(this);
    this.onChangeEmployeeEmail = this.onChangeEmployeeEmail.bind(this);
    this.onChangeEmployeeMobile = this.onChangeEmployeeMobile.bind(this);
    this.onChangeEmployeeDivision = this.onChangeEmployeeDivision.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      Id: '',
      name: '',
      address: '',
      email: '',
      mobile:'',
      division:''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/emp/edit-employee/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          Id: res.data.Id,
          name: res.data.name,
          address: res.data.address,
          email: res.data.email,
          mobile: res.data.mobile,
          division:res.data.division
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeEmployeeID(e) {
    this.setState({ Id: e.target.value })
  }

  onChangeEmployeeName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeEmployeeAddress(e) {
    this.setState({ address: e.target.value })
  }

  onChangeEmployeeEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeEmployeeMobile(e) {
    this.setState({ mobile: e.target.value })
  }

  onChangeEmployeeDivision(e) {
    this.setState({ division: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const employeeObject = {
      Id: this.state.Id,
      name: this.state.name,
      address: this.state.address,
      email: this.state.email,
      mobile: this.state.mobile,
      division:this.state.division
    };

    axios.put('http://localhost:8000/emp/update-employee/' + this.props.match.params.id, employeeObject)
      .then((res) => {
        console.log(res.data)
        console.log('Employee successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    
    this.props.history.push('/employee-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Id">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" value={this.state.Id} onChange={this.onChangeEmployeeID} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeEmployeeName} />
        </Form.Group>

        <Form.Group controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={this.state.Adress} onChange={this.onChangeEmployeeAddress} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" value={this.state.email} onChange={this.onChangeEmployeeEmail} />
        </Form.Group>

        <Form.Group controlId="Mobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="text" value={this.state.mobile} onChange={this.onChangeEmployeeMobile} />
        </Form.Group>

        <Form.Group controlId="Division">
          <Form.Label>Division</Form.Label>
          <Form.Control type="text" value={this.state.division} onChange={this.onChangeEmployeeDivision} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Submit Employee details
        </Button>
      </Form>
    </div>);
  }
}
