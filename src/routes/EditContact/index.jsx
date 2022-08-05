import React from 'react';
import './style.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from '../../store/slices/contacts';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactView from '../../templates/ContactView';

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

  const removeContactHandler = () => {
    navigate('confirmRemoveContact');
  };

  const removeContactElem = () => {
    return (
      <div>
        <button className="removeContactBtn"
                onClick={removeContactHandler}
        >Remove Contact ?
        </button>
        <hr className="m-0"/>
      </div>
    );
  };

  const templateProps = {
    title: 'Edit Contact',
  };

  return (
    <ContactView {...templateProps}>
      <p className="formExplanation">Enter contact name, phone number and position to
        edit it in the Phone Book</p>

      <ContactForm
        formInitialValues={formInitialValues}
        submitHandler={formSubmitHandler}
        btnName="Save"
        removeContact={removeContactElem}
      />
    </ContactView>
  );
};

export default EditContact;
