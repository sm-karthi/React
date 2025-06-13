import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', age: 28, city: 'New York' },
    { id: 2, name: 'Alice Smith', age: 32, city: 'London' },
    { id: 3, name: 'David Johnson', age: 24, city: 'Sydney' },
    { id: 4, name: 'Emily Brown', age: 30, city: 'Paris' }
  ]);

  return (
    <div className="flex flex-col space-y-8 justify-center items-center h-screen bg-gray-100">
        
        <Link to={"/create-user"} className='bg-green-500 text-white px-2 py-1 rounded font-semibold hover:bg-green-600 transition duration-150 cursor-pointer shadow'>Create User</Link>

      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Users</h2>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Age</th>
              <th className="border border-gray-300 px-4 py-2">City</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.age}</td>
                <td className="border border-gray-300 px-4 py-2">{user.city}</td>
                <td className="border border-gray-300 px-4 py-2 space-x-2">

                    <Link to={`/view/${user.id}`} className='bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600'>View</Link>

                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
