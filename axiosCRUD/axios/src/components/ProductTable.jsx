
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductTable() {
    let [product, setProduct] = useState([]);

    let getData = async () => {
        try {
            let response = await axios.get("https://68218a3c259dad2655af85dc.mockapi.io/courses");
            setProduct(response.data);
        } catch (error) {
            alert("Something went wrong");
        }
    };

    useEffect(() => {
        getData();
    }, []);


    let productDelete = async (id) => {
        
        try {
             if (confirm("Are you sure? Delete this product?")) {
            await axios.delete(`https://68218a3c259dad2655af85dc.mockapi.io/courses/${id}`);
            getData(); 
        }
            
        } catch (error) {
            alert("Something went wrong")
        }
    }


    return (

        <div className='p-4'>
            
            <div className='flex justify-end mr-24 mt-4'>
                <Link to={"/create-product"} className='bg-[#db0f56] text-white px-3 py-1 rounded'>Create product</Link>
            </div>

            <table className='border-collapse border border-gray-400 w-full mt-10'>
                <thead>
                    <tr className='bg-gray-200'>
                        <th className='border border-gray-400 px-4 py-2'>Title</th>
                        <th className='border border-gray-400 px-4 py-2'>Category</th>
                        <th className='border border-gray-400 px-4 py-2'>Description</th>
                        <th className='border border-gray-400 px-4 py-2'>Image</th>
                        <th className='border border-gray-400 px-4 py-2'>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {product.map((item) => (
                        <tr>
                            <td className='border border-gray-400 px-4 py-2'>{item.title}</td>
                            <td className='border border-gray-400 px-4 py-2'>{item.category}</td>
                            <td className='border border-gray-400 px-4 py-2 w-98'>{item.description}</td>
                            <td className='border border-gray-400 px-4 py-2'>
                                <img src={item.thumbnailURL} alt={item.title} className=' h-18 object-cover' />
                            </td>
                            <td className='border border-gray-400 px-2 py-2'>
                                <Link to={`/view/${item.id}`} className='bg-blue-500 text-white px-3 py-1 rounded'>View</Link>
                                <Link to={`/edit/${item.id}`} className='bg-green-500 text-white px-3 py-1 rounded ml-4'>Edit</Link>
                                <button onClick={() => productDelete(item.id)} className='bg-red-500 text-white px-3 py-1 rounded ml-4 cursor-pointer'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}

export default ProductTable
