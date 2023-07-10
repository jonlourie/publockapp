import { useState } from "react";
import { useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import AccountNav from "../AccountNav";
import { UserContext } from "../UserContext";
import PublocksPage from "./PublocksPage";
import axios from "axios";
import DashboardWidget from "../DashboardWidget";

export default function ProfilePage(){

    const [redirect, setRedirect] = useState(null);
    const {ready, user, setUser} = useContext(UserContext);
    
    let {subpage} = useParams();
    if(subpage === undefined) {
        subpage = 'profile';
    }

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }

    if(!ready) {
        return 'Loading...';
    }

    if(ready && !user && !redirect) {
        return <Navigate to={'/login'}/>
    }

    if(redirect) {
        return <Navigate to={redirect}/>
    }
    return (
        <>
        <div>
        <AccountNav />
        <div className="text-center">

            <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={"/audit"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
                All Data
            </Link>
            <br />
            <br />
        </div>
 
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name} ({user.email})<br />
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>

                </div>
            )}
            {subpage === 'publocks' && (
                <PublocksPage>

                </PublocksPage>
            )}
        </div>
        </>
    );
}