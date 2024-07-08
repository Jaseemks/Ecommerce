import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Contact.css"

function Contact() {

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: '',
  });


  const validateForm = () => {
    let valid = true;

    const newErrors = {
      fullname: '',
      email: '',
      phone: '',
      message: '',
    }
    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full name Required";
      valid = false;
    } else if (formData.fullname.length < 3) {
      newErrors.fullname = "Full name should be minimum 3 digits"
      valid = false;
    }
    setErrors(newErrors);
    return valid;

    if (!formData.email.trim()) {
      newErrors.email = "email Required";
      valid = false;
    }else if (!/\S+@\S+.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email"
      valid = false;
    }
  // setErrors(newErrors);
  // return valid;

}

const handlesubmit = (event) => {
  event.preventDefault();
  if (validateForm()) {

    console.log("Submitted", formData);
  }

}

const onChangeHandler = (event) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
}
console.log(formData);

return (
  <Container>
    <Row className='justify-content-center'>
      <Col md={6} >
        <div className='shadow bg-white p-4'>
          <form className='form-container my-4' onSubmit={handlesubmit}>
            <input type="text" name='fullname' placeholder='Fullname' onChange={onChangeHandler} />
            <span className='error'>{errors?.fullname ?? ''}</span>
            <input type="email" name='email' placeholder='Email' onChange={onChangeHandler} />
            <input type="number" name='phone' placeholder='Phone' onChange={onChangeHandler} />
            <textarea type="text" rows={10} name='msg' placeholder='Message' onChange={onChangeHandler} />
            <button >submit</button>
          </form>
        </div>
      </Col>
    </Row>
  </Container>
)
}

export default Contact