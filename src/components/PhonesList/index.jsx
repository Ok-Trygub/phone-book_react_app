import React from 'react';
import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import AddIcon from './AddIcon';

const PhoneList = () => {
    const contacts = useSelector(state => state.contacts);
    const navigate = useNavigate();

    const addContact = () => {
        navigate('newContact');
    };

    const showContactData = (id) => () => {
        navigate('contactData/' + id);
    }

    const renderContactItem = () => {
        return (
            <ListGroup>
                {contacts.map(item => (
                    <ListGroup.Item
                        onClick={showContactData(item.id)}
                        className="phoneList_item"
                        key={item.id}>{item.firstName}
                        <span className="phoneList_item-position">{' ' + item.lastName}</span>
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
                            <Col xs={6}>
                                <hr className="phoneList_separator"/>

                                <div className="d-flex justify-content-end">
                                    <button className="addBtn p-0" onClick={addContact}>
                                        <AddIcon/>
                                        <span className='addBtn-text'>Add Contact</span>
                                    </button>
                                </div>
                                <hr className="phoneList_separator"/>
                            </Col>
                        </Row>

                        <Row className="d-flex justify-content-center">
                            <Col xs={6} className="phoneList_itemsWrapper">
                                {contacts.length ? renderContactItem() : <div><p>Contacts not found.</p></div>}
                            </Col>
                        </Row>

                    </Container>
                </div>
            </main>
        </>
    );
};

export default PhoneList;
