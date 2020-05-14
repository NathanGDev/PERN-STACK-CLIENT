import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import APIURL from "../helpers/environment";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/api/user/signup`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
          firstName: firstName,
          lastName: lastName,
        },
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
      <h1>Sign up</h1>
      <FormGroup>
        <label htmlFor="firstName">First Name: </label>
        <Input
          className="auth-inputs"
          onChange={(e) => setFirstName(e.target.value)}
          name="firstname"
          value={firstName}
          required={true}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="lastName">Last Name: </label>
        <Input
          className="auth-inputs"
          onChange={(e) => setLastName(e.target.value)}
          name="lastName"
          value={lastName}
          required={true}
        />
      </FormGroup>
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
          <label htmlFor="password">Password: </label>
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
          Signup
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
