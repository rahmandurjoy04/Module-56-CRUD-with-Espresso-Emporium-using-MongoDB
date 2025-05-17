import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';

const AuthProvider = ({children}) => {

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // userLogin
    const signInUser = (email,password) =>{
        signInWithEmailAndPassword(auth,email,password)
        .then(res=>{console.log(res.user)
            const signInInfo = {email,
                lastSignInTime:res.user?.metadata?.lastSignInTime
            }
            fetch('http://localhost:3000/users',{
                method:'PATCH',
                headers:{

                    'content-type':'application/json'
                },
                body:JSON.stringify(signInInfo)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(' Update Patch',data);
            })


        })
        .catch(error=>console.log(error))

        // Update Last SignIn to the db

    }


    const userInfo = {
        createUser,
        signInUser
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;