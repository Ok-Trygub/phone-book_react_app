import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addContact } from '../../store/slices/contacts';
import _ from 'lodash';
import ContactForm from '../../components/ContactForm';

const AddContact = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formInitialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    position: ''
  };

  const formSubmitHandler = (values, actions) => {
    const id = _.uniqueId();

    dispatch(addContact({
      id,
      ...values
    }));
    actions.resetForm();

    navigate('/');
  };

  return (
    <div className="contactForm">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs={5} className="contactForm_wrapper align-items-center">
            <h1 className="contactForm_title m-0 d-flex justify-content-center">Add New
              Contact</h1>
            <hr/>
            <p className="contactForm_explanation">Enter contact name, phone number and
              position to add it to
              Phone Book</p>
            <ContactForm
              formInitialValues={formInitialValues}
              submitHandler={formSubmitHandler}
              btnName="Add"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddContact;
