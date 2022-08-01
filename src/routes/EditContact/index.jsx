import React from 'react';
import './style.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from '../../store/slices/contacts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from '../../components/ContactForm';

const EditContact = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const currentContact = useSelector(state =>
    state.contacts.find(contact => contact.id === id));

  const formInitialValues = {
    firstName: currentContact.firstName,
    lastName: currentContact.lastName,
    phoneNumber: currentContact.phoneNumber,
    position: currentContact.position
  };

  const formSubmitHandler = (values, actions) => {
    dispatch(updateContact({
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
            <h1 className="contactForm_title m-0 d-flex justify-content-center">Edit Contact</h1>
            <hr/>
            <p className="contactForm_explanation">Enter contact name, phone number and position to
              edit it in the Phone Book</p>

            <ContactForm
              formInitialValues={formInitialValues}
              submitHandler={formSubmitHandler}
              btnName="Save"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditContact;
