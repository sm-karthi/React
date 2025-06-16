import { useFormik } from 'formik';

function UserForm() {


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      city: "CH",
    },
    validate: (values) => {
      let error = {}

      if (values.name === "" || values.name.length < 5) {
        error.name = "Please enter a valid user name"
      }

      if (values.email === "") {
        error.email = "Please enter email"
      }
      else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        error.email = "Invalid email id"
      }

      if (values.mobile === "") {
        error.mobile = "Please enter mobile number"
      }
      else if (!(/^\d+$/.test(values.mobile))) {
        error.mobile = "Only numbers are allowed"
      }
      else if (values.mobile.length < 10 || values.mobile.length > 10) {
        error.mobile = "Mobile number should have exactly 10 digit"
      }

      return error
    },
    onSubmit: (values) => {
      console.log(values);
    }

  })


  return (
    <div className="max-w-md mx-auto mt-12 p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">User Form</h2>
      <form className="space-y-4" onSubmit={formik.handleSubmit}>
        <div>
          <label className="block font-semibold mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border px-3 py-2 rounded" />
          {
            formik.touched.name ? <span className='text-red-500'>
              {formik.errors.name}</span> : null
          }
        </div>

        <div>
          <label className="block font-semibold mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border px-3 py-2 rounded" />
          {
            formik.touched.email ? <span className='text-red-500'>{formik.errors.email}</span> : null
          }
        </div>

        <div>
          <label className="block font-semibold mb-1">Mobile Number:</label>
          <input
            type="text"
            name="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border px-3 py-2 rounded" />
          {
            formik.touched.mobile ? <span className='text-red-500'>{formik.errors.mobile}</span> : null
          }
        </div>

        <div>
          <label className="block font-semibold mb-1">City:</label>
          <select
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border px-3 py-2 rounded">

            <option value={"CH"}>Chennai</option>
            <option value={"BA"}>Banglore</option>
          </select>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;
