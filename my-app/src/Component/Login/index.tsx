import React, { useState } from 'react';
import { useFormik, Form, Field, ErrorMessage,Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Input from '../Input';
import './style-login.css'

interface LoginFormValues {
  [key: string]: string;
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<LoginFormValues>({
      email: '',
      password: '',
  });

  const handleLogin = async (values: LoginFormValues) => {
      try {
      const requestOptions = {
          method: 'POST',
          body: JSON.stringify({
              email: values.email,
              password: values.password,
          }),
          headers: {
              'Content-Type': 'application/json',
          },
      };

      const response = await fetch('https://mock-api.arikmpt.com/api/user/login', requestOptions);
      if (response.ok) {
          const responseData = await response.json();
          console.log('Login berhasil:', responseData);
          navigate('/editlist');
      } else {
          const errorData = await response.json();
          console.error('Login gagal:', errorData);
      }
      } catch (error) {
          console.error('Error:', error);
      }
  };

  return (
    <Formik
    initialValues={formData}
    validationSchema={Yup.object().shape({
        email: Yup.string().email('Email tidak valid').required('Email harus diisi'),
        password: Yup.string().required('Password harus diisi'),
    })}
    onSubmit={(values, { setSubmitting }) => {
        if (Object.keys(values).some((key) => values[key] === '')) {
            setSubmitting(false);
        } else {
            setFormData({ ...formData, ...values });
            handleLogin(values);
        }
    }}


    >
        <Form className='login-form'>
            <h1 className='login-header mb-5 text-white'>Login Page</h1>

            <label htmlFor='email' className='form-label'>
                Email:
            </label>
            <Field as={Input} className='form-input' type='email' id='email' name='email' placeholder='Email' />
            <ErrorMessage name='email' component='span' className='error-message text-xs text-red-600' />

            <label htmlFor='password' className='form-label'>
                Password:
            </label>
            <Field as={Input} className='form-input' type='password' id='password' name='password' placeholder='Password' />
            <ErrorMessage name='password' component='span' className='error-message text-xs text-red-600' />

            <button type='submit' className='submit-button'>
                Login
            </button>

            <span className='text-white'> or </span>

            <button type='button' className='secondary-button'>
                Register
            </button>

            <span className='forgot-password'>Forgot Your Password</span>
        </Form>
    </Formik>
  );
};

export default Login;