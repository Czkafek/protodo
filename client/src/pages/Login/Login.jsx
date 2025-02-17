import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Login.module.css';

const Login = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });
    const [errorValue, setErrorValue] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        if(formValues.username === '' || formValues.email === '' || formValues.password === '') {
            setErrorValue('Please fill in all fields correctly');
        }
        else {
            setErrorValue('');
        }
    }
    

    return (
        <div className={styles.registerPage}>
            <div className={styles.registerContainer}>
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className={styles.registerForm}>
                    <input 
                        className={styles.formGroup}
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder='Email'
                        value={formValues.email} 
                        onChange={handleChange} 
                    />
                    <input 
                        className={styles.formGroup}
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder='Password'
                        value={formValues.password} 
                        onChange={handleChange} 
                    />
                    {
                        errorValue.length > 0 &&
                        <p className={styles.error}>{errorValue}</p>
                    }
                    <div className={styles.formOptions}>
                        <button type="submit" className={styles.submitButton}>Login</button>
                        <p>Don’t have an account?<Link to='/register' className={styles.link}>Register</Link></p>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default Login;