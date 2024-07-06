import React, { useState } from 'react';

export default function FormModal({ isOpen, onClose, item }) {
  const [formData, setFormData] = useState({
    name: item.studentName || '',
    roomNo: item.roomNo || '',
    presentAbsent: item.presentAbsent || '',
    vegToggle: item.mealPreference === 'Veg',
    nonVegToggle: item.mealPreference === 'NonVeg',
    vegFood: item.desiredFood === 'Veg Biryani' || item.desiredFood === 'Paneer Butter Masala' ? item.desiredFood : 'Veg Biryani',
    nonVegFood: item.desiredFood === 'Chicken Biryani' || item.desiredFood === 'Fish Curry' ? item.desiredFood : 'Chicken Biryani',
    phoneNumber: item.phoneNumber || '',
    residence: item.residence || '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      roomNo: '',
      presentAbsent: '',
      vegToggle: false,
      nonVegToggle: false,
      vegFood: 'Veg Biryani',
      nonVegFood: 'Chicken Biryani',
      phoneNumber: '',
      residence: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mealPreference = formData.vegToggle ? 'Veg' : 'NonVeg';
    const desiredFood = formData.vegToggle ? formData.vegFood : formData.nonVegFood;
    const updatedFormData = {
      name: formData.name,
      roomNo: formData.roomNo,
      presentAbsent: formData.presentAbsent,
      mealPreference,
      desiredFood,
      phoneNumber: formData.phoneNumber,
      residence: formData.residence,
    };
    console.log('Form Data:', updatedFormData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1 className="text-lg leading-6 font-large text-gray-900" style={{padding:"10px",marginLeft:"15px",fontSize:"17px",fontWeight:"bold"}}>Edit Details</h1>
          <button onClick={onClose} className="p-2">
            ❌
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-wrap">
            <div className="sm:w-1/2 pr-4">
              <label className="block text-sm font-medium text-gray-700">NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />

              <label className="block text-sm font-medium text-gray-700 mt-4">Room No</label>
              <input
                type="text"
                name="roomNo"
                value={formData.roomNo}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />

              <label className="block text-sm font-medium text-gray-700 mt-4">Present/Absent</label>
              <input
                type="text"
                name="presentAbsent"
                value={formData.presentAbsent}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Veg</label>
                <input
                  type="checkbox"
                  name="vegToggle"
                  checked={formData.vegToggle}
                  onChange={handleChange}
                  className="mr-2"
                />
                {formData.vegToggle && (
                  <select
                    name="vegFood"
                    value={formData.vegFood}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  >
                    <option value="Veg Biryani">Veg Biryani</option>
                    <option value="Paneer Butter Masala">Paneer Butter Masala</option>
                  </select>
                )}
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">NonVeg</label>
                <input
                  type="checkbox"
                  name="nonVegToggle"
                  checked={formData.nonVegToggle}
                  onChange={handleChange}
                  className="mr-2"
                />
                {formData.nonVegToggle && (
                  <select
                    name="nonVegFood"
                    value={formData.nonVegFood}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  >
                    <option value="Chicken Biryani">Chicken Biryani</option>
                    <option value="Fish Curry">Fish Curry</option>
                  </select>
                )}
              </div>
            </div>

            {/* Right Side */}
            <div>
                
            </div>
            <div className="sm:w-1/2 pl-4">
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full phoneNumber"
                required
              />

              <label className="block text-sm font-medium text-gray-700 mt-4">Residence</label>
              <input
                type="text"
                name="residence"
                value={formData.residence}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full residence"
                required
              />
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
