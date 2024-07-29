import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function Navbar() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <nav id="sidebar" className="bg-black text-white h-screen w-56 flex flex-col">
        <div className="p-4 border-b border-gray-700 flex justify-center items-center">
          <img src='/images/hostel.png' style={{ width: "100px", height: "80px" }} alt="Hostel" />
        </div>
        <ul className="flex-1 overflow-y-auto">
          {isAuthenticated ? (
            <>
              <NavLink
                to="/"
                className="block py-2 px-4 hover:bg-black transition duration-200"
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/contact"
                className="block py-2 px-4 hover:bg-black transition duration-200"
              >
                <li>Contact</li>
              </NavLink>
              <NavLink
                to="/monday"
                className="block py-2 px-4 hover:bg-black transition duration-200"
              >
                <li>Monday</li>
              </NavLink>
              <NavLink
                to="/tuesday"
                className="block py-2 px-4 hover:bg-black transition duration-200"
              >
                <li>Tuesday</li>
              </NavLink>
              <NavLink
                to="/wednesday"
                className="block py-2 px-4 hover:bg-black transition duration-200"
              >
                <li>Wednesday</li>
              </NavLink>
              <NavLink
                to="/thursday"
                className="block py-2 px-4 hover:bg-black transition duration-200"
              >
                <li>Thursday</li>
              </NavLink>
              <NavLink
                to="/friday"
                className="block py-2 px-4 hover:bg-black transition duration-200"
              >
                <li>Friday</li>
              </NavLink>
              <NavLink
                to="/saturday"
                className="block py-2 px-4 hover:bg-black transition duration-200"
              >
                <li>Saturday</li>
              </NavLink>
              <NavLink
                to="/sunday"
                className="block py-2 px-4 hover:bg-black transition duration-200"
              >
                <li>Sunday</li>
              </NavLink>
            </>
          ) : (
            <>
             <NavLink
            to="/"
            className="block py-2 px-4 hover:bg-black transition duration-200"
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/contact"
            className="block py-2 px-4 hover:bg-black transition duration-200"
          >
            <li>Contact</li>
          </NavLink>
            </>
           
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
