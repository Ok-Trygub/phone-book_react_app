import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import './ConfirmRmContact.scss';
import { deleteContact } from '../../store/slices/contacts';
import { useDispatch, useSelector } from 'react-redux';
import ContactView from '../../templates/ContactView';

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
    navigate(-3);
  };

  const templateProps = {
    title: 'Delete Contact',
  };

  return (
    <main>
      <ContactView {...templateProps}>
        <div>
          <p className="confirmQuestion mb-3 text-center p-1">Are you sure ? </p>
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

      </ContactView>
    </main>
  );
};

export default ConfirmRmContact;
