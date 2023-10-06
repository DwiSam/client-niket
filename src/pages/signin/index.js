import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import axios from "axios";

import NButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import NAlert from "../../components/Alert";

export default function PageSignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:9000/api/v1/cms/auth/signin",
        {
          email: form.email,
          password: form.password,
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err.response.data.msg);
    }
  };

  return (
    <Container md={12}>
      <NAlert message={"test"} type="danger" />
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title className="text-center">Form Sign In</Card.Title>
          <Form>
            <TextInputWithLabel
              label="Email Address"
              name="email"
              value={form.email}
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
            <TextInputWithLabel
              label="Password"
              name="password"
              value={form.password}
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <NButton action={handleSubmit} variant="primary">
              Submit
            </NButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
