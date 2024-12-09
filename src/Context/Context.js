import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase';

export const Authcontex = createContext();
const auth = getAuth(app)
const Context = ({ children }) => {

    const [user, setuser] = useState(null)
    const [loading,setloading]=useState(true)

    const createuser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginuser=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout=()=>
    {
        setloading(true)
        return signOut(auth);
    }


    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentuser => {
            setuser(currentuser);
            setloading(false)
        })
        return () => unsubcribe();
    }, [])

    const authinfo = {user,loading, createuser,loginuser,logout }

    return (
        <div>

            <Authcontex.Provider value={authinfo}>
                {
                    children
                }
            </Authcontex.Provider>

        </div>
    );
};

export default Context;