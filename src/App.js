import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PhoneList from './routes/PhonesList/PhoneList';
import AddContact from './routes/AddContact/AddContact';
import ContactData from './routes/ContactData/ContactData';
import EditContact from './routes/EditContact/EditContact';
import ConfirmRmContact from './routes/ConfirmRemoveContact/ConfirmRmContact';

function App() {
  const homepage = 'phone-book_react_app';

  return (
    <div className="App">
      <Routes>
        <Route path={homepage} element={<PhoneList/>}/>
        <Route path={homepage + '/newContact'} element={<AddContact/>}/>
        <Route path={homepage + '/contactData/:id'} element={<ContactData/>}/>
        <Route path={homepage + '/contactData/:id/editContact'} element={<EditContact/>}/>
        <Route path={homepage + '/contactData/:id/editContact/confirmRemoveContact'}
               element={<ConfirmRmContact/>}/>
      </Routes>
    </div>
  );
}

export default App;
