import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import "./App.css";
import Monday from './components/WeekDays/Monday';
import Tuesday from './components/WeekDays/Tuesday';
import Sunday from './components/WeekDays/Sunday';
import Wednesday from './components/WeekDays/Wednesday';
import Friday from './components/WeekDays/Friday';
import Thursday from './components/WeekDays/Thursday';
import Saturday from './components/WeekDays/Saturday';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className='MainContainer'>
        <div className='Navbar'>

          <Navbar />
        </div>
        <div className='Content'>

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/monday' element={<Monday onClick={() => handleDayClick('Monday')} />}></Route>
            <Route path='/tuesday' element={<Tuesday onClick={() => handleDayClick('Tuesday')} />}></Route>
            <Route path='/wednesday' element={<Wednesday onClick={() => handleDayClick('Wednesday')} />}></Route>
            <Route path='/thursday' element={<Thursday onClick={() => handleDayClick('Thursday')} />}></Route>
            <Route path='/friday' element={<Friday onClick={() => handleDayClick('Friday')} />}></Route>
            <Route path='/saturday' element={<Saturday onClick={() => handleDayClick('Saturday')} />}></Route>
            <Route path='/sunday' element={<Sunday onClick={() => handleDayClick('Sunday')} />}></Route>
          </Routes>
        </div>
      </div>

      {modalVisible && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedDay}</h2>
            <p>This is the content for {selectedDay}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
