import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { ExpansionPanelDetails } from "@material-ui/core";
import APIURL from "../helpers/environment";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/api/user/login`, {
      method: "POST",
      body: JSON.stringify({
        user: { username: username, password: password },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      });
  };

  return (
    <div className="main-auth">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username: </Label>
          <Input
            className="auth-inputs"
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            value={username}
            required={true}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password: </Label>
          <Input
            className="auth-inputs"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            value={password}
            required={true}
          />
        </FormGroup>
        <Button className="authButton" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
