import React from "react";
import Alert from "react-bootstrap/Alert";

function NAlert({ message, type }) {
  return <Alert variant={type}>{message}</Alert>;
}

export default NAlert;
