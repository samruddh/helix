import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateEmployee from "./components/Create-Employee.component";
import EditEmployee from "./components/Edit-Employee.component";
import EmployeeList from "./components/Employee-list.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/Create-employee"} className="nav-link">
                Employee Managment system
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/Create-employee"} className="nav-link">
                  Create Student
                </Link>
              </Nav>
              <Nav>
                <Link to={"/Employee-list"} className="nav-link">
                  Employee List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateEmployee} />
                <Route path="/Create-Employee" component={CreateEmployee} />
                <Route path="/Edit-Employee/:id" component={EditEmployee} />
                <Route path="/Employee-list" component={EmployeeList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;