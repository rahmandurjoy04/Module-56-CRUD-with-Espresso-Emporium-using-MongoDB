import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const SignUp = () => {
    const {createUser}=use(AuthContext)
    const handleSignUp = (e) =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const {email,password,...restFormData} = Object.fromEntries(formData.entries())
        // const email = formData.get('email')
        // const phone = formData.get('phone')
        // const photo = formData.get('photoUrl')
        // const password = formData.get('password')
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            const userProfile =  {
                email,
                ...restFormData,
                creationTime : result.user?.metadata?.creationTime,
                lastSignInTime : result.user?.metadata?.lastSignInTime

            }

            // Save Profile into the DB
            fetch('http://localhost:3000/users',{
                method:'POST',
                headers:{

                    "content-type":"application/json"
                },
                body:JSON.stringify(userProfile)
            })
            .then(res=> res.json())
            .then(data=>console.log("After saving Profile",data))
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <div>
                <div className='flex justify-center'>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h2 className='font-semibold my-5 text-center text-2xl'>Register Your Account</h2>
                        <div className="card-body">
                            <form onSubmit={handleSignUp} className="fieldset">
                                {/* Name */}
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Name" />
                                {/* Phone */}
                                <label className="label">Phone</label>
                                <input type="text" name='phone' className="input" placeholder="Phone" />
                                {/* Photo Url */}
                                <label className="label">Photo Url</label>
                                <input type="text" name='photoUrl' className="input" placeholder="Photo Url" />
                                {/* email */}
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                {/* password */}
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <button type='submit' className="btn btn-neutral mt-4">Register</button>
                                <p className='font-semibold text-center'>Already have an account?<Link to={'/signin'}><span className='text-secondary'>SignIn</span></Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;