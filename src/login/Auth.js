import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Login from "./Login";
import Signup from "./Signup";
import "./Auth.css";

const Auth = (props) => {
  const [login, setLogin] = useState(true);

  function toggle(event) {
    event.preventDefault();
    setLogin(!login);
    console.log("toggle -> login", login);
  }

  function toggler() {
    return login ? (
      <Signup updateToken={props.updateToken} />
    ) : (
      <Login updateToken={props.updateToken} />
    );
  }

  return (
    <Container className="auth-container">
      {toggler()}
      {/* <Row>
        <Col md="6">
          <Signup updateToken={props.updateToken} />
        </Col>
        <Col md="6" className="login-col">
          <Login updateToken={props.updateToken} />
        </Col>
      </Row> */}
      <Button className="signup-button" onClick={toggle}>
        Signup/Login
      </Button>
    </Container>
  );
};

export default Auth;
