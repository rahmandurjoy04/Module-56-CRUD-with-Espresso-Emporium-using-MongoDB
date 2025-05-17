import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const SignIn = () => {
    const {signInUser}=use(AuthContext)
    const handleSignIn = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email,password)
        
    }
    
    return (
        <div>
            <div className='flex justify-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold my-5 text-center text-2xl'>Login Your Account</h2>
                <div className="card-body">
                    <form onSubmit={handleSignIn} className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='font-semibold text-center'>Don't have an account?<Link to={'/signup'}><span className='text-secondary'>Register</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignIn;