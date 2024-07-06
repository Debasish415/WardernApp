import React, { useState } from 'react';
import DeleteModal from '../DeleteModal';
import { ChevronLeftIcon, ChevronRightIcon, PencilIcon, TrashIcon } from '@heroicons/react/20/solid';
import FormModal from '../FormModal';
import { useLocation } from 'react-router-dom';

const items = [
  { id: 1, roomNo: '001', studentName: 'John Doe', attendance: 'Present', mealPreference: 'Veg' },
  { id: 2, roomNo: '002', studentName: 'Jane Smith', attendance: 'Absent', mealPreference: 'NonVeg' },
  { id: 3, roomNo: '003', studentName: 'Bob Johnson', attendance: 'Present', mealPreference: 'Veg' },
  { id: 4, roomNo: '004', studentName: 'Alice Davis', attendance: 'Present', mealPreference: 'NonVeg' },
  { id: 5, roomNo: '005', studentName: 'Charlie Brown', attendance: 'Absent', mealPreference: 'Veg' },
  { id: 6, roomNo: '006', studentName: 'David Wilson', attendance: 'Present', mealPreference: 'NonVeg' },
  { id: 7, roomNo: '007', studentName: 'Emma Moore', attendance: 'Present', mealPreference: 'Veg' },
  { id: 8, roomNo: '008', studentName: 'Frank Miller', attendance: 'Absent', mealPreference: 'NonVeg' },
  { id: 9, roomNo: '009', studentName: 'Grace Lee', attendance: 'Present', mealPreference: 'Veg' },
  { id: 10, roomNo: '010', studentName: 'Henry White', attendance: 'Absent', mealPreference: 'NonVeg' },
  { id: 11, roomNo: '011', studentName: 'Isabella Clark', attendance: 'Present', mealPreference: 'Veg' },
  { id: 12, roomNo: '012', studentName: 'Jack Hall', attendance: 'Present', mealPreference: 'NonVeg' },
  { id: 13, roomNo: '013', studentName: 'Katherine Allen', attendance: 'Absent', mealPreference: 'Veg' },
  { id: 14, roomNo: '014', studentName: 'Liam Scott', attendance: 'Present', mealPreference: 'NonVeg' },
  { id: 15, roomNo: '015', studentName: 'Mia King', attendance: 'Present', mealPreference: 'Veg' },
];


const itemsPerPage = 10;

export default function PaginationTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const params = useLocation();
  console.log(params.pathname)
 
  // const [items,setItems]=useState()

  // Calculate total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Calculate start and end index of items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice items array based on current page
  const currentItems = items.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleEdit = (id) => {
   console.log("handle edit clicked-------------")
  };

  const handleDelete = (id) => {
    setIsModalOpen(true);
    console.log(id)
    // handleConfirmDelete(id)
  };
  
  const handleFormEdit = (item) => {
    setSelectedItem(item);
    setIsFormOpen(true);
  };
  const handleCloseModal = () => {
    setIsFormOpen(false);
    setSelectedItem(null);
  };
  
  
  

  return (
<>
{isModalOpen && (<DeleteModal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)} />)}
{isFormOpen && <FormModal isOpen={isFormOpen} onClose={handleCloseModal} item={selectedItem} />}

      
    <div className="p-12">
      <button 
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Create
      </button>
      {/* <p>{pathname}</p> */}
      <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            {/* Adjusted padding and font size */}
            <th className="px-12 py-3 text-left text-sm font-medium text-blue-500 uppercase tracking-wider">Room no.</th>
            <th className="px-12 py-3 text-left text-sm font-medium text-blue-500 uppercase tracking-wider">Student Name</th>
            <th className="px-12 py-3 text-left text-sm font-medium text-blue-500 uppercase tracking-wider">Present/Absent</th>
            <th className="px-12 py-3 text-left text-sm font-medium text-blue-500 uppercase tracking-wider">Veg/NonVeg</th>
            <th className="px-12 py-3 text-left text-sm font-medium text-blue-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {currentItems.map(item => (
            <tr key={item.id}>
              {/* Adjusted padding and font size */}
              <td className="px-12 py-3 whitespace-nowrap text-sm">{item.roomNo}</td>
              <td className="px-12 py-3 whitespace-nowrap text-sm">{item.studentName}</td>
              <td className="px-12 py-3 whitespace-nowrap text-sm">{item.attendance}</td>
              <td className="px-12 py-3 whitespace-nowrap text-sm">{item.mealPreference}</td>
              <td className="px-12 py-3 whitespace-nowrap text-sm text-right">
                <button onClick={() => handleFormEdit(item.id)} className="text-indigo-600 hover:text-indigo-900 mx-2">
                  <PencilIcon className="h-5 w-5 inline" />
                </button>
                <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-900 mx-2">
                  <TrashIcon className="h-5 w-5 inline" />
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`relative inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
          >
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            <span className="ml-2">Previous</span>
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`relative ml-3 inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
          >
            <span>Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
              <span className="font-medium">{Math.min(endIndex, items.length)}</span> of{' '}
              <span className="font-medium">{items.length}</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${
                    currentPage === index + 1
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
</>
  );
}
