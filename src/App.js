import React from 'react';
import {Routes, Route} from 'react-router-dom';
import PhoneList from './components/PhonesList';
import AddContact from './routes/AddContact';
import ContactData from "./routes/ContactData";
import EditContact from './routes/EditContact'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<PhoneList/>}/>
                <Route path="newContact" element={<AddContact/>}/>
                <Route path="contactData/:id" element={<ContactData/>}/>
              <Route path="contactData/:id/editContact" element={<EditContact/>}/>
            </Routes>
        </div>
    );
}

export default App;
