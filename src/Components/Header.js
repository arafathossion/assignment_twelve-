import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../fierbase.init';

const Header = () => {
const [user, loading, error] = useAuthState(auth);

    return (
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {
                    user? <button onClick={() =>{
                        signOut(auth);
                    }}>Log out</button> : <>
                    <NavLink to="/signIn">Sign In</NavLink>
                <NavLink to="/signUp">Sign Up</NavLink></>
                }
                <NavLink to="/private">Privite</NavLink>
            </nav>
        </div>
    );
};

export default Header;