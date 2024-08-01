import React, { useContext, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import gsap from 'gsap';

function Navbar() {
  const { isAuthenticated } = useContext(AuthContext);
  const navItems = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      navItems.current, 
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out', stagger: 0.1 }
    );
  }, [isAuthenticated]);

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
                ref={(el) => navItems.current[0] = el}
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/contact"
                className="block py-2 px-4 hover:bg-black transition duration-200"
                ref={(el) => navItems.current[1] = el}
              >
                <li>Contact</li>
              </NavLink>
              <NavLink
                to="/monday"
                className="block py-2 px-4 hover:bg-black transition duration-200"
                ref={(el) => navItems.current[2] = el}
              >
                <li>Monday</li>
              </NavLink>
              <NavLink
                to="/tuesday"
                className="block py-2 px-4 hover:bg-black transition duration-200"
                ref={(el) => navItems.current[3] = el}
              >
                <li>Tuesday</li>
              </NavLink>
              <NavLink
                to="/wednesday"
                className="block py-2 px-4 hover:bg-black transition duration-200"
                ref={(el) => navItems.current[4] = el}
              >
                <li>Wednesday</li>
              </NavLink>
              <NavLink
                to="/thursday"
                className="block py-2 px-4 hover:bg-black transition duration-200"
                ref={(el) => navItems.current[5] = el}
              >
                <li>Thursday</li>
              </NavLink>
              <NavLink
                to="/friday"
                className="block py-2 px-4 hover:bg-black transition duration-200"
                ref={(el) => navItems.current[6] = el}
              >
                <li>Friday</li>
              </NavLink>
              <NavLink
                to="/saturday"
                className="block py-2 px-4 hover:bg-black transition duration-200"
                ref={(el) => navItems.current[7] = el}
              >
                <li>Saturday</li>
              </NavLink>
              <NavLink
                to="/sunday"
                className="block py-2 px-4 hover:bg-black transition duration-200"
                ref={(el) => navItems.current[8] = el}
              >
                <li>Sunday</li>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/"
                className="block py-2 px-4 hover:bg-black transition duration-200"
                ref={(el) => navItems.current[0] = el}
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/contact"
                className="block py-2 px-4 hover:bg-black transition duration-200"
                ref={(el) => navItems.current[1] = el}
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
