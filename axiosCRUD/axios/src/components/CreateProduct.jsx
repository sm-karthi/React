import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateProduct() {
    let navigate = useNavigate();



    let formik = useFormik({
        initialValues: {
            title: "",
            category: "",
            description: "",
            thumbnailURL: "",
            rows: [
                {
                    key: "",
                    value: ""
                }
            ]
        },
        validate: (values) => {
            let error = {};

            if (!values.title || values.title.length < 3) {
                error.title = "Please enter a valid title";
            }

            if (!values.category) {
                error.category = "Please select a category";
            }

            if (!values.description || values.description.length < 10) {
                error.description = "Description should be at least 10 characters";
            }

            if (!values.thumbnailURL) {
                error.thumbnailURL = "Please enter an image URL";
            }

            return error;
        },
        onSubmit: async (values) => {

            try {
                let updatedProduct = await axios.post(`https://68218a3c259dad2655af85dc.mockapi.io/courses/`, values);
                navigate("/")
            } catch (error) {
                alert("Something went wrong")
            }
        }
    });

    return (
        <div className="max-w-md mx-auto mt-12 p-4 bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-4">Create Product</h2>
            <form className="space-y-4" onSubmit={formik.handleSubmit}>

                <div>
                    <label className="block font-semibold mb-1">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full border px-3 py-2 rounded" />
                    {formik.touched.title ?
                        <span className="text-red-500">{formik.errors.title}</span> : null
                    }
                </div>

                <div>
                    <label className="block font-semibold mb-1">Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full border px-3 py-2 rounded" />
                    {formik.touched.category ?
                        <span className="text-red-500">{formik.errors.category}</span> : null
                    }
                </div>

                <div>
                    <label className="block font-semibold mb-1">Description:</label>
                    <textarea
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full border px-3 py-2 rounded h-24" />
                    {formik.touched.description ?
                        <span className="text-red-500">{formik.errors.description}</span> : null
                    }
                </div>

                <div>
                    <label className="block font-semibold mb-1">Image URL:</label>
                    <input
                        type="text"
                        name="thumbnailURL"
                        value={formik.values.thumbnailURL}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full border px-3 py-2 rounded" />
                    {formik.touched.thumbnailURL ?
                        <span className="text-red-500">{formik.errors.thumbnailURL}</span> : null
                    }
                </div>

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-700">
                    Submit
                </button>

            </form>
        </div>
    );
}

export default CreateProduct
