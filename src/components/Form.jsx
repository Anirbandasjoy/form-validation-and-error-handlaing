import React from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';

const Form = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            email: yup.string().email().required(),
            password: yup.string()
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                    "Password must contain at least 6 char, including one uppercase letter, one lowercase letter, one number, and one special char."
                )
                .required()
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm({ values: "" });
        }
    });

    return (
        <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
            <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-center text-gray-700">Login</h1>
                <form className="space-y-4" onSubmit={formik.handleSubmit}>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input name='email' id='email' type="text" placeholder="Email Address" className="w-full input input-bordered" value={formik.values.email} onChange={formik.handleChange} />
                        <span className="text-red-600 text-xs">{formik.touched.email ? formik.errors.email : ""}</span>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input name='password' id='password' type="password" placeholder="Enter Password" className="w-full input input-bordered" value={formik.values.password} onChange={formik.handleChange} />
                        <span className="text-red-600 text-xs">{formik.touched.password ? formik.errors.password : ""}</span>
                    </div>
                    <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
                    <div>
                        <button type='submit' className="btn btn-block hover:bg-[#4B5563] hover:text-white">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
