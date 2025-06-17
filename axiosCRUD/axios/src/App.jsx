import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductTable from './components/ProductTable';
import ProductView from './components/ProductView';
import ProductEdit from './components/ProductEdit';
import CreateProduct from './components/CreateProduct';

function App() {


  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<ProductTable />} />
        <Route path='/view/:id' element={<ProductView />} />
        <Route path='/edit/:id' element={<ProductEdit />} />
        <Route path='/create-product' element={<CreateProduct/>}/>

      </Routes>


    </BrowserRouter>

  );
}

export default App;
