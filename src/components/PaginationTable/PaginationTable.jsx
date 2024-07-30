import React, { useState, useEffect } from 'react';
import DeleteModal from '../DeleteModal';
import { ChevronLeftIcon, ChevronRightIcon, PencilIcon, TrashIcon } from '@heroicons/react/20/solid';
import FormModal from '../FormModal';
import { toast } from 'react-toastify';
import './PaginationTable.css';

const itemsPerPage = 5;

export default function PaginationTable({ apiUrl }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [operation, setOperation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(apiUrl, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
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

  const handleEdit = (item, name) => {
    setOperation(name);
    setSelectedItem(item);
    setIsFormOpen(true);
  };

  const handleCreate = () => {
    setOperation('Create');
    setSelectedItem({});
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    setSelectedItem(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    const token = localStorage.getItem('token');
    try {
      await fetch(`${apiUrl}/${selectedItem}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setItems(items.filter(item => item.id !== selectedItem));
      setIsModalOpen(false);
      toast.error('Deleted Successfully!');
    } catch (error) {
      toast.error('Delete Failed!');
    }
  };

  const handleFormSubmit = async (item) => {
    const token = localStorage.getItem('token');

    if (selectedItem && selectedItem.id) {
      try {
        const response = await fetch(`${apiUrl}/${selectedItem.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(item),
        });
        if (!response.ok) {
          throw new Error('Failed to update item');
        }
        const updatedItem = await response.json();
        setItems(items.map(i => (i.id === selectedItem.id ? updatedItem : i)));
        
      } catch (error) {
        console.error('Error updating item:', error);
        toast.error('Error updating item');
      }
    } else {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(item),
        });
        if (!response.ok) {
          throw new Error('Failed to create item');
        }
        const newItem = await response.json();
        setItems([...items, newItem]);
      } catch (error) {
        console.error('Error creating item:', error);
        toast.error('Error creating item');
      }
    }

    setIsFormOpen(false);
    setSelectedItem(null);
  };

  const handleCloseModal = () => {
    setIsFormOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      {isModalOpen && (
        <DeleteModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onDelete={handleConfirmDelete}
        />
      )}
      {isFormOpen && (
        <FormModal
          isOpen={isFormOpen}
          onClose={handleCloseModal}
          item={selectedItem}
          operation={operation}
          onSubmit={handleFormSubmit}
        />
      )}

      <div className="p-12">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleCreate}
        >
          Create
        </button>

        <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg overflow-hidden paginationtable">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-12 py-3 text-left text-sm font-medium text-blue-500 uppercase tracking-wider">Room no.</th>
              <th className="px-12 py-3 text-left text-sm font-medium text-blue-500 uppercase tracking-wider">Student Name</th>
              <th className="px-12 py-3 text-left text-sm font-medium text-blue-500 uppercase tracking-wider">Present/Absent</th>
              <th className="px-12 py-3 text-left text-sm font-medium text-blue-500 uppercase tracking-wider">Veg/NonVeg</th>
              <th className="px-12 py-3 text-left text-sm font-medium text-blue-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {
              items.length === 0 ? (
                <tr>
                  <td colSpan="5">
                    <div className="flex justify-center">
                      <img src="/images/no-data.png" style={{ width: "100px", height: "100px" }} />
                    </div>
                  </td>
                </tr>
              ) : (
                currentItems.map(item => (
                  <tr key={item.id}>
                    <td className="px-12 py-3 whitespace-nowrap text-sm">{item.room_no}</td>
                    <td className="px-12 py-3 whitespace-nowrap text-sm">{item.student_name}</td>
                    <td className="px-12 py-3 whitespace-nowrap text-sm">{item.attendance}</td>
                    <td className="px-12 py-3 whitespace-nowrap text-sm">{item.meal_preference}</td>
                    <td className="px-12 py-3 whitespace-nowrap text-sm text-right">
                      <button onClick={() => handleEdit(item, 'Edit')} className="text-indigo-600 hover:text-indigo-900 mx-2">
                        <PencilIcon className="h-5 w-5 inline" />
                      </button>
                      <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-900 mx-2">
                        <TrashIcon className="h-5 w-5 inline" />
                      </button>
                    </td>
                  </tr>
                ))
              )
            }
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
              <nav className="relative inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
                >
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </button>
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
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
