import React from "react";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import UserNav from "../UserNav";
import StoresPage from "./StoresPage";
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import CardMintingWidget from "../CardMintingWidget";

export default function WalletUserPage(props){

    //stores will appear here this is where your storepages will pop up and you will be able to track them 
    const { disconnect } = useDisconnect()
    const [redirect, setRedirect] = useState(null);
    const {address, isConnected} = props;

    
    let {subpage} = useParams();
    console.log(subpage);

    async function logout(){
    
        if(isConnected) {

            disconnect();
            setRedirect('/');

        }
        
    }
    
    if(redirect) {
        return <Navigate to={redirect}/>
    }

    if(subpage === undefined) {
        subpage = 'dashboard';
    }

    if(!isConnected) {
        return 'Loading...';
    }

    return (
        <>
        <div>
        <UserNav />
            <br/>
                <CardMintingWidget />
        </div>
        <div>
    
            {subpage === 'dashboard' && (
                <div className="text-center text-bold max-w-lg mx-auto">
                    Logged in as ({address}) <br/><br/>
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
                </div>
            )}
            {subpage === 'stores' && (
                <StoresPage>

                </StoresPage>
            )}
        </div>
        </>
    );
}