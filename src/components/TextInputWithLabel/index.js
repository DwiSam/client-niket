import React from "react";
import Form from "react-bootstrap/Form";
import TextInput from "../TextInput";

function TextInputWithLabel({
  label,
  name,
  value,
  onChange,
  type,
  placeholder,
}) {
  return (
    <Form.Group className="mb-2">
      <Form.Label>{label}</Form.Label>
      <TextInput
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      ></TextInput>
    </Form.Group>
  );
}

export default TextInputWithLabel;
