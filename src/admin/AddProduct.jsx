import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {Container} from 'react-bootstrap';
 
const AddProduct = () => {
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
        <row>
            <col>
            <h2>Add Product</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Product name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Product name"
          />
          <Form.Control.Feedback type=''>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Category</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Category"
          />
          <Form.Control.Feedback type='invalid'>Please choose product price</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Price"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose product price
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      </Form>
            </col>
        </row>
    </Container>
  )
}

export default AddProduct