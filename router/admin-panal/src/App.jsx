import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import UserForm from './components/UserForm';
import UserView from './components/UserView';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <BrowserRouter>

      <UserProvider>

        <div className="h-screen w-screen flex overflow-hidden">

          <Sidebar />


          <div className="flex flex-col flex-1 overflow-hidden">

            <Navbar />


            <div className="flex-1 overflow-auto bg-gray-50">
              <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/" element={<Dashboard />} />
                <Route path='/products' element={<Products />} />
                <Route path='/create-user' element={<UserForm />} />
                <Route path='/view/:id' element={<UserView />} />
              </Routes>
            </div>
          </div>
        </div>

      </UserProvider>
      
    </BrowserRouter>
  );
}

export default App;
