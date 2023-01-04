import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target ;
        const email = form.email.value ;
        const password = form.password.value;



        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from,{replace: true});
        })
        .catch(error => console.error(error));
    }


    return (
        <div className='from-second-container'>
        <div className='from-container'>
           <h2 className='from-title'>Login</h2>
            <form onSubmit={handleSubmit} className='form-div'>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <button type='submit' value='login' className='login'>Login</button>
                <p className='new-ema'>New to Ema-john? <Link to="/signup" className='careate'>Create New Account</Link></p>
            </form>
           <div className='google'>
           <div className='or'>
                <hr className='hr-1st' />
                <span className='or-title'>or</span>
                <hr className='hr-1st'/>
            </div>
            <button className='google-btn'>Continue with Google</button>
           </div>
           </div>
        </div>
    );
};

export default Login;