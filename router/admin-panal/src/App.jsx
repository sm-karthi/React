import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import UserForm from './components/UserForm';

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-screen flex overflow-hidden">

        <Sidebar />


        <div className="flex flex-col flex-1 overflow-hidden">

          <Navbar />


          <div className="flex-1 overflow-auto bg-gray-50">
            <Routes>
              <Route path="/users" element={<Users />} />
              <Route path="/" element={<Dashboard/>} />
              <Route path='/products' element={<Products/>} />
              <Route path='/create-user' element={<UserForm/>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
