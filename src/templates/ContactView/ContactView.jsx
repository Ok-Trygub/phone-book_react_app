import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactView = (props) => {
  const {
    title
  } = props;

  return (
    <div className='phoneBookWrapper'>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs={5} className="phoneBookWrapper__col align-items-center">
            <h1 className="phoneBookWrapper__title m-0 d-flex justify-content-center">{title}</h1>
            <hr/>
            {props.children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactView;
