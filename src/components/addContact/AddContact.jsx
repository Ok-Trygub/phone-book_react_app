import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.scss';

const AddContact = () => {
  return (
    <div className='addContactForm'>
      <Container>

        <Row className='d-flex justify-content-center'>
          <Col xs={5} className='addContactForm_wrapper'>
            <Form>
              <Form.Group className="addContactForm_field mb-1">
                <Form.Label className='addContactForm_inputName'>First name</Form.Label>
                <Form.Control className='addContactForm_input'/>
              </Form.Group>

              <Form.Group className="addContactForm_field mb-1">
                <Form.Label className='addContactForm_inputName'>Last name</Form.Label>
                <Form.Control className='addContactForm_input'/>
              </Form.Group>

              <Form.Group className="addContactForm_field">
                <Form.Label className='addContactForm_inputName'>Position</Form.Label>
                <Form.Control className='addContactForm_input'/>
              </Form.Group>

            </Form>
          </Col>
        </Row>


      </Container>
    </div>

  );
};

export default AddContact;
