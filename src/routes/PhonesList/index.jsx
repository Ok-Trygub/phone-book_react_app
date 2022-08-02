import React, { useState } from 'react';
import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddIcon from './AddIcon';
import SearchIcon from './SearchIcon';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const PhoneList = () => {
  const [searchValue, setSearchValue] = useState('');

  const contacts = useSelector(state => state.contacts);
  const navigate = useNavigate();

  const addContact = () => {
    navigate('newContact');
  };

  const showContactData = (id) => () => {
    navigate('contactData/' + id);
  };

  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const filterContacts = contacts.filter(contact => {
    if (contact.firstName.toLowerCase()
      .includes(searchValue.toLowerCase())) {
      return contact.firstName;
    }

    if (contact.phoneNumber.toLowerCase()
      .includes(searchValue.toLowerCase())) {
      return contact.phoneNumber;
    }
  });

  const resetSearchHandler = () => {
    setSearchValue('');
  };

  const renderContactItem = () => {
    return (
      <ListGroup>
        {filterContacts.map(item => (
          <ListGroup.Item
            onClick={showContactData(item.id)}
            className="phoneList_item"
            key={item.id}>{item.firstName}
            <span>{' ' + item.lastName}</span>
          </ListGroup.Item>
        ))
        }
      </ListGroup>
    );
  };

  return (
    <>
      <header>
        <h1 className="d-flex justify-content-center phoneList_title m-0">Phone Book</h1>
      </header>

      <main>
        <div className="phoneList">
          <Container>
            <Row className="d-flex justify-content-center">
              <Col xs={6} className="phoneList_itemsWrapper">

                <div className="d-flex justify-content-between align-items-center mb-3">

                  <InputGroup>
                    <Form.Control
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      className="phoneList_searchInput"
                      value={searchValue}
                      onChange={searchHandler}
                      disabled={!contacts.length}
                    />
                    <SearchIcon/>
                    <Button variant="outline-secondary" id="button-addon2"
                            className="searchBtn"
                            disabled={!searchValue.length}
                            onClick={resetSearchHandler}
                    >
                      Reset
                    </Button>
                  </InputGroup>

                  <button className="addBtn p-0" onClick={addContact}>
                    <AddIcon/>
                    <span className="addBtn-text">Add Contact</span>
                  </button>
                </div>
                <hr className="mb-2"/>
                {contacts.length ? renderContactItem() : <Row>
                  <p className="mt-5">Contacts not found.</p>
                </Row>}
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </>
  );
};

export default PhoneList;
