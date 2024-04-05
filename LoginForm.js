import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/register', formData);
      // Handle success (save token to local storage, redirect, etc.)
    } catch (error) {
      // Handle error
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleChange} />
      </Form.Group>
      {/* Repeat for other fields */}
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};
