import React from 'react';
import './style.scss';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = (props) => {

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(3, 'Must be 3 characters or more')
      .max(50, 'Must be 50 characters or less')
      .required('This field is required')
      .trim(),

    lastName: Yup.string()
      .min(3, 'Must be 3 characters or more')
      .max(50, 'Must be 50 characters or less')
      .required('This field is required')
      .trim(),

    phoneNumber: Yup.number()
      .min(3, 'Must be 3 characters or more')
      // .max(50, 'Must be 50 characters or less')
      .required('This field is required'),

    position: Yup.string()
      .min(3, 'Must be 3 characters or more')
      .max(50, 'Must be 50 characters or less')
      .required('This field is required')
      .trim(),
  });

  return (
    <Formik
      initialValues={props.formInitialValues}
      onSubmit={props.submitHandler}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        errors,
      }) => (

        <Form onSubmit={handleSubmit}>
          <Form.Group className="formItem mb-1">
            <Form.Label className="formLabel">First name</Form.Label>
            <Form.Control className="formInput"
                          name="firstName"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}/>
            {touched.firstName && errors.firstName &&
              <p className="validationError">{errors.firstName}</p>}
          </Form.Group>

          <Form.Group className="formItem mb-1">
            <Form.Label className="formLabel">Last name</Form.Label>
            <Form.Control className="formInput"
                          name="lastName"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}/>
            {touched.lastName && errors.lastName &&
              <p className="validationError">{errors.lastName}</p>}
          </Form.Group>

          <Form.Group className="formItem mb-1">
            <Form.Label className="formLabel">Phone number</Form.Label>
            <Form.Control className="formInput"
                          name="phoneNumber"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phoneNumber}/>
            {touched.phoneNumber && errors.phoneNumber &&
              <p className="validationError">{errors.phoneNumber}</p>}
          </Form.Group>

          <Form.Group className="formItem">
            <Form.Label className="formLabel">Position</Form.Label>
            <Form.Control className="formInput"
                          name="position"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.position}/>
            {touched.position && errors.position &&
              <p className="validationError">{errors.position}</p>}
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button variant="primary"
                    type="submit"
                    className="mt-3 submitBtn"
            >
              {props.btnName}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
