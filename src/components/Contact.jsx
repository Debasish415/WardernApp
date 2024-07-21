import React from 'react'

function Contact() {
  return (
    
    <>

        <div className='Contact-container'>

        <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Hostel</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Facilities and Amenities
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our hostel offers a wide range of facilities and amenities to ensure a comfortable and enjoyable stay.
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17l4 4 4-4m-4-5V3" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Free Wi-Fi</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">Stay connected with our high-speed internet access available throughout the hostel.</dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">24/7 Security</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">Your safety is our priority with round-the-clock security services.</dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Comfortable Rooms</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">Enjoy a good night's sleep in our clean and cozy rooms.</dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4v7a1 1 0 001 1h8a1 1 0 001-1v-7h4m-9-4v4m0 4v4" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Laundry Service</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">Take advantage of our convenient laundry services during your stay.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-indigo-600" style={{height: "39vh"}}>
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to join us?</span>
          <span className="block">Book your stay today.</span>
        </h2>
      </div>
      <div>
        <button className="mt-4 lg:mt-0 bg-white text-indigo-600 font-bold py-2 px-4 rounded">
          Contact Us
        </button>
      </div>
    </div>
  </div>
</div>

        </div>
        

    </>
  )
}

export default Contact