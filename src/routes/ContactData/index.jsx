import React from 'react';
import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import EditIcon from './editIcon';

const ContactData = () => {
  const { id } = useParams();
  const currentContact = useSelector(state =>
    state.contacts.find(contact => contact.id === id));

  const navigate = useNavigate();

  const editContact = () => {
    navigate('editContact');
  };

  return (
    <main>
      <div className="contactData">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={6} className="contactData_wrapper">
              <h1 className="d-flex justify-content-center m-0 contactData_title">Contact's
                Data</h1>

              <div className="contactData_itemsWrapper m-0">
                <div className="d-flex justify-content-end align-items-center">
                  <button className="editBtn p-0 m-0" onClick={editContact}>
                    <EditIcon/>
                    <span className="editBtn-text">Edit Contact</span>
                  </button>
                </div>

                <p>First name</p>
                <p className="contactData_item">{currentContact.firstName}</p>

                <hr className="contactData_separator"/>
                <p>Last name</p>
                <p className="contactData_item">{currentContact.lastName}</p>

                <hr className="contactData_separator"/>
                <p>Phone number</p>
                <p className="contactData_item">{currentContact.phoneNumber}</p>

                <hr className="contactData_separator"/>
                <p>Position</p>
                <p className="contactData_item">{currentContact.position}</p>
              </div>

              <div className="d-flex justify-content-end">
                <Button variant="primary"
                        className="mt-2 returnBtn"
                        onClick={() => navigate('/')}
                >
                  Return
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default ContactData;
