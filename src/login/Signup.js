import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:1337/api/user/signup", {
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
    <div>
      <h1>Sign up</h1>
      <FormGroup>
        <label htmlFor="firstName">First Name</label>
        <Input
          onChange={(e) => setFirstName(e.target.value)}
          name="firstname"
          value={firstName}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="lastName">Last Name</label>
        <Input
          onChange={(e) => setLastName(e.target.value)}
          name="lastName"
          value={lastName}
        />
      </FormGroup>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            value={username}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
          />
        </FormGroup>

        <Button type="submit">Signup</Button>
      </Form>
    </div>
  );
};

export default Signup;
