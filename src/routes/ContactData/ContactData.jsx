import React from 'react';
import './ContactData.scss';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import EditIcon from '../../components/UI/editIcon';
import ContactView from '../../templates/ContactView';

const ContactData = () => {
  const { id } = useParams();
  const currentContact = useSelector(state =>
    state.contacts.find(contact => contact.id === id));

  const navigate = useNavigate();

  const editContact = () => {
    navigate('editContact');
  };

  const templateProps = {
    title: 'Contact\'s Data',
  };

  return (
    <main>
      <ContactView {...templateProps}>

        <div className="editContactWrapper m-0">
          <div className="d-flex justify-content-end align-items-center">
            <button className="editBtn p-0 m-0" onClick={editContact}>
              <EditIcon/>
              <span className="editBtn-text">Edit Contact</span>
            </button>
          </div>

          <p>First name</p>
          <p className="dataItem">{currentContact.firstName}</p>

          <hr className="mt-1 mb-1"/>
          <p>Last name</p>
          <p className="dataItem">{currentContact.lastName}</p>

          <hr className="mt-1 mb-1"/>
          <p>Phone number</p>
          <p className="dataItem">{currentContact.phoneNumber}</p>

          <hr className="mt-1 mb-1"/>
          <p>Position</p>
          <p className="dataItem">{currentContact.position}</p>
        </div>

        <div className="d-flex justify-content-end">
          <Button variant="primary"
                  className="mt-2 returnBtn"
                  onClick={() => navigate(-1)}
          >
            Return
          </Button>
        </div>

      </ContactView>
    </main>
  );
};

export default ContactData;
