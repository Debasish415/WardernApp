import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import "./Home.css";

function Home() {
  return (
    <div className='HomeContainer'>
      <Navigation />
      <div>
        <div>
          {/* Hero Section */}
          <div className="relative flex flex-col lg:flex-row overflow-hidden flex-grow">
            <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 lg:py-20 xl:py-28">
              <div className="relative z-10 pb-8 rounded-lg">
                <main className="flex flex-col justify-center h-full">
                  <div className="text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block xl:inline text-white">Welcome to</span>{' '}
                      <span className="block text-white xl:inline">Warden's Space</span>
                    </h1>
                    <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Efficiently manage hostel operations and student information with our comprehensive system.
                    </p>
                    <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Stay organized and ensure a smooth experience for both the warden and students.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <Link
                          to="/about"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        >
                          Learn More
                        </Link>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <Link
                          to="/contact"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                        >
                          Contact Us
                        </Link>
                      </div>
                      
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
