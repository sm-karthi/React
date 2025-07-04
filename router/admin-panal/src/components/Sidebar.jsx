import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className=" w-64 overflow-y-hidden h-screen">
      <div className="h-full p-4 overflow-y-hidden bg-blue-400 text-white flex flex-col items-center">
        <img src="../../src/images/logo.png" alt="logo" className="w-26 mt-6" />

        <ul className="space-y-2 font-medium mt-10 w-full">
          <li>
            <Link to="/" className="flex items-center p-2 rounded-lg hover:bg-blue-500 w-full">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 22 21">
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/users" className="flex items-center p-2 rounded-lg hover:bg-blue-500 w-full">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 18">
                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
              </svg>
              <span className="ml-3">Users</span>
            </Link>
          </li>

          <li>
            <Link to="/products" className="flex items-center p-2 rounded-lg hover:bg-blue-500 w-full">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 18 20">
                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
              </svg>
              <span className="ml-3">Products</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
