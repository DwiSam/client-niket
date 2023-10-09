import React from "react";
import { Form } from "react-bootstrap";

import NButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";

function NForm({ form, handleChange, handleSubmit, isLoading }) {
  return (
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

      <NButton
        loading={isLoading}
        disabled={isLoading}
        action={handleSubmit}
        variant="primary"
      >
        Submit
      </NButton>
    </Form>
  );
}

export default NForm;
