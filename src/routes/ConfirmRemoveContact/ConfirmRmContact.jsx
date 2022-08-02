import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import './style.scss';
import { deleteContact } from '../../store/slices/contacts';
import { useDispatch, useSelector } from 'react-redux';

const ConfirmRmContact = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const currentContact = useSelector(state =>
    state.contacts.find(contact => contact.id === id));

  const confirmRemoveHandler = () => {
    dispatch(deleteContact(
      currentContact
    ));
    navigate('/');
  };

  return (
    <main>
      <div className="confirmDelete">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={6} className="confirmDelete_wrapper">

              <div className="confirmDelete_wrapper-bg">
                <Row className="text-center">
                  <p className="mt-1">Delete Contact</p>
                </Row>

                <hr className="mt-2 mb-2"/>
                <Row className="text-center">
                  <p className="confirmDelete_text mb-1">Are you sure ? </p>
                </Row>
              </div>

              <div className="d-flex justify-content-center mt-2">
                <Button variant="light"
                        className="returnBtn"
                        onClick={() => navigate(-1)}
                >
                  Cancel
                </Button>

                <Button variant="primary"
                        className="confirmBtn"
                        onClick={confirmRemoveHandler}
                >
                  Confirm
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default ConfirmRmContact;
