import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav id="sidebar" className="bg-gray-800 text-white h-screen w-56 flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <img src='/images/hostel.png' style={{width:"100px",height:"80px"}}/>
        </div>
        <ul className="flex-1 overflow-y-auto">
          <NavLink
            to="/"
            className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
            
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/contact"
            className="block py-2 px-4 hover:bg-gray-700 transition duration-200"

          >
            <li>Contact</li>
          </NavLink>
          <NavLink
            to="/monday"
            className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
            
          >
            <li>Monday</li>
          </NavLink>
          <NavLink
            to="/tuesday"
            className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
          
          >
            <li>Tuesday</li>
          </NavLink>
          <NavLink
            to="/wednesday"
            className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
      
          >
            <li>Wednesday</li>
          </NavLink>
          <NavLink
            to="/thursday"
            className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
            
          >
            <li>Thursday</li>
          </NavLink>
          <NavLink
            to="/friday"
            className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
       
          >
            <li>Friday</li>
          </NavLink>
          <NavLink
            to="/saturday"
            className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
      
          >
            <li>Saturday</li>
          </NavLink>
          <NavLink
            to="/sunday"
            className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
           
          >
            <li>Sunday</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
