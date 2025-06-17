import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductView() {
    let { id } = useParams();
    let [product, setProduct] = useState();

    let getData = async () => {
        try {
            let response = await axios.get(`https://68218a3c259dad2655af85dc.mockapi.io/courses/${id}`);
            setProduct(response.data);
        } catch (error) {
            alert("Something went wrong");
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='flex items-center justify-center h-screen'>
            {product ? (
                <div className='flex flex-col space-y-3'>
                    <img src={product.thumbnailURL} alt="" className='w-32' />
                    <h1>Title : {product.title}</h1>
                    <h1>Category : {product.category}</h1>
                    <p>Description : {product.description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ProductView;
