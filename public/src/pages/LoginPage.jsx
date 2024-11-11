
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", { username, password });
      localStorage.setItem("user", JSON.stringify(response.data));
      if (response.data.role === "admin") {
        history.push("/admin-dashboard");
      } else {
        history.push("/user-dashboard");
      }
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
