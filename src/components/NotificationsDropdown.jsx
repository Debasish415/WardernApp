import React, { useState, useEffect } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const notifications = [
  { id: 1, message: 'New message from Warden' },
  { id: 2, message: 'Your leave request is approved' },
  { id: 3, message: 'Hostel event tomorrow at 5 PM' },
];

const NotificationsDropdown = () => {
  const [unreadCount, setUnreadCount] = useState(notifications.length);

  useEffect(() => {
    // Fetch notifications from an API if needed
    // setNotifications(fetchedNotifications);
  }, []);

  const handleMarkAsRead = () => {
    setUnreadCount(0);
  };

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="relative flex rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="sr-only">View notifications</span>
          <BellIcon aria-hidden="true" className="h-6 w-6" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          )}
        </MenuButton>
      </div>
      <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {notifications.map((notification) => (
          <MenuItem key={notification.id}>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={handleMarkAsRead}
            >
              {notification.message}
            </a>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default NotificationsDropdown;
