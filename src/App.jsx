import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import './App.css';
import Monday from './components/WeekDays/Monday';
import Tuesday from './components/WeekDays/Tuesday';
import Sunday from './components/WeekDays/Sunday';
import Wednesday from './components/WeekDays/Wednesday';
import Friday from './components/WeekDays/Friday';
import Thursday from './components/WeekDays/Thursday';
import Saturday from './components/WeekDays/Saturday';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import Signup from './components/SignUp';
import { AuthContext } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <div className='MainContainer'>
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Navbar />
      <div className='Content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/monday' element={<ProtectedRoute element={<Monday />} />} />
          <Route path='/tuesday' element={<ProtectedRoute element={<Tuesday />} />} />
          <Route path='/wednesday' element={<ProtectedRoute element={<Wednesday />} />} />
          <Route path='/thursday' element={<ProtectedRoute element={<Thursday />} />} />
          <Route path='/friday' element={<ProtectedRoute element={<Friday />} />} />
          <Route path='/saturday' element={<ProtectedRoute element={<Saturday />} />} />
          <Route path='/sunday' element={<ProtectedRoute element={<Sunday />} />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
