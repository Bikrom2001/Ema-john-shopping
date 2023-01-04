import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SignUp.css';

const SignUp = () => {

    const [error, setError] = useState(null);

    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password.length < 6){
            setError('password must be 6 characters long');
            return ;
        }

        if(password !== confirm){
            setError('Your password did not match');
            return ;
        }


        createUser(email, password)
        .then(result => {
            const user = result.user ;
            console.log(user);
            form.reset();
        })
        .catch(error => console.error(error))

    }



    return (
        <div className='from-second-container'>
            <div className='from-container2'>
                <h2 className='from-title'>Sign Up</h2>
                <form onSubmit={handleSubmit} className='form-div'>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" id="confirm" required />
                        <span className='error-title'>{error}</span>
                    </div>
                    <button type='submit' value='signup' className='login'>Sign Up</button>
                    <p className='new-ema'>Already have an account? <Link to="/login" className='careate'>Login</Link></p>
                </form>
                <div className='google'>
                    <div className='or'>
                        <hr className='hr-1st' />
                        <span className='or-title'>or</span>
                        <hr className='hr-1st' />
                    </div>
                    <button className='google-btn'>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;