import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { AuthContext } from './AuthContext';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import NotificationsDropdown from './NotificationsDropdown'; // Import the NotificationsDropdown component

const navigation = [
  { name: 'Trident', href: 'https://tat.ac.in/', current: false },
  { name: 'Hostels', href: 'https://tat.ac.in/facilities/hostels/', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
};

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                    alt="Your Company"
                    src=""
                    className="h-8 w-auto"
                  /> */}
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <NotificationsDropdown /> {/* Replace bell icon button with NotificationsDropdown */}
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="/images/user.png"
                        className="h-8 w-8 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Your Profile
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Settings
                      </a>
                    </MenuItem>
                    {isAuthenticated ? (
                      <MenuItem>
                        <a href="/login" onClick={() => localStorage.clear()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Sign out
                        </a>
                      </MenuItem>
                    ) : (
                      <MenuItem>
                        <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Sign In
                        </a>
                      </MenuItem>
                    )}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <motion.div
              className="space-y-1 px-2 pb-3 pt-2"
              initial="closed"
              animate={open ? "open" : "closed"}
              variants={menuVariants}
            >
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  target="_blank"
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </motion.div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
