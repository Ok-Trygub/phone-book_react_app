import React from 'react';
import './AddContact.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addContact } from '../../store/slices/contacts';
import _ from 'lodash';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactView from '../../templates/ContactView';

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

  const templateProps = {
    title: 'Add New Contact',
  };

  return (
    <ContactView {...templateProps}>
      <p className="formExplanation">Enter contact name, phone number and
        position to add it to
        Phone Book</p>
      <ContactForm
        formInitialValues={formInitialValues}
        submitHandler={formSubmitHandler}
        btnName="Add"
      />
    </ContactView>

  );
};

export default AddContact;
