//If there is a drop down menu we may create a seperate login page for metamask authentication 
//if not we may just put the metamask authentication on the login page under the login button
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../UserContext.jsx";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUser} = useContext(UserContext);

    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            const data = await axios.post('/login', {email, password});
            setUser(data);
            alert('Login Successful');
            setRedirect(true);
        } catch (e) {
            alert('Login Failed');
        }
        
    }

    if(redirect) {
        return <Navigate to={'/'}/>
    }

    return(

        <>
        <div className="mt-6 bg-gray-100 -mx-8 px-8 pt-8 justify-center">
       
            <div className="px-8  text-1xl"></div>

        </div>

        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Publock Login</h1>
                <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                <input type="email" placeholder={'your@email.com'} 
                    value={email} 
                    onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" placeholder="password"
                     value={password} 
                     onChange={ev => setPassword(ev.target.value)}/>
                <button className="primary">Login</button>
                <div className="text-center py-2 text-gray-500">
                    Don't have a booking account? <Link className= "underline text-pink-400" to={'/register'}>Register as a Publock</Link>
                </div>
                </form>
            </div>
        </div>
        </>
    );
}