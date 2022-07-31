import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PhoneList from './components/PhonesList';
import AddContact from './components/addContact/AddContact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PhoneList/>}/>
        <Route path="newContact" element={<AddContact/>}/>
      </Routes>
    </div>
  );
}

export default App;
