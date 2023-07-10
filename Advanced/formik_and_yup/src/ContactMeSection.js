import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {useFormik} from "formik";
import { signUpSchema } from "./schemas";


const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};


function ContactMeSection(){

    const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(
                "🚀 ~ file: ContactMeSection.js ~ line 12 ~ Registration ~ values",
                values
            )
            action.resetForm();
        }
    })

    // console.log(
    //     "🚀 ~ file: ContactMeSection.js ~ line 29 ~ Registration ~ Formik errors",
    //     errors
    // )

return(
    <div  className="text-center bg-info">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name </label><br/>
                <input 
                type="text" 
                autoComplete="off"
                name="name"
                id="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                
                {errors.name && touched.name ? (<p className="text-danger">{errors.name}</p>) : null}
            </div>
            <div>
                <label htmlFor="email">Email</label><br/>
                <input 
                type="text" 
                autoComplete="off"
                name="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {errors.email && touched.email ? (<p className="text-danger">{errors.email}</p>) : null}
            </div>
            <div>
                <label htmlFor="password">Password </label><br/>
                <input 
                type="password" 
                autoComplete="off"
                name="password"
                id="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {errors.password && touched.password ? (<p className="text-danger">{errors.password}</p>) : null}
            </div>
            <div>
                <label htmlFor="confirm_password">Confirm Password </label><br/>
                <input 
                type="password" 
                autoComplete="off"
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm Password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {errors.confirm_password && touched.confirm_password ? (<p className="text-danger">{errors.confirm_password}</p>) : null}
            </div>
            <div>
                <p>Wanna register using Gmail?</p>
                <button type="submit" className="btn btn-primary btn-sm">Register</button>
            </div>
        </form>
    </div>
)
}

export default ContactMeSection;