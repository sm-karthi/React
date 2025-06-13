import React, { useState } from 'react';

function UserForm() {
 

  return (
    <div className="max-w-md mx-auto mt-12 p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">User Form</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Name:</label>
          <input
            type="text"
            name="name"
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Age:</label>
          <input
            type="number"
            name="age"
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">City:</label>
          <input
            type="text"
            name="city"
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;
