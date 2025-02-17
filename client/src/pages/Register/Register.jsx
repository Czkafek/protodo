import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Register.module.css';

const Register = () => {
    const [formValues, setFormValues] = useState({
        username: '',
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
                <h1>Register</h1>
                <form onSubmit={handleSubmit} className={styles.registerForm}>
                    <input 
                        className={styles.formGroup}
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder='Username'
                        value={formValues.username} 
                        onChange={handleChange} 
                    />
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
                    <p className={styles.error}>{errorValue}</p>
                    <div className={styles.formOptions}>
                        <button type="submit" className={styles.submitButton}>Register</button>
                        <p>Already have an account?<Link to='/login' className={styles.link}>Log in</Link></p>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default Register;