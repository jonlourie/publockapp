import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios"; // eventually we will need to connect to the backend
import { UserContext } from "../UserContext";

export default function AuditPage(){

    //const [ready, user] = useContext(UserContext); // this is the user object
    const {ready, user, deposit, withdraw} = useContext(UserContext); // this is the user object

    //Below here the user can add their ems to get pinged when the audit is completed 
    const [isToggled, setToggle] = useState(false); // initial state is 'false'

    const [balance, setBalance] = useState(null); // initial state is 'false'

    const handleToggle = () => {
        setToggle(!isToggled); // switches the state to the opposite value
    };

    function fetchBalance(){
        // For demonstration purpose let's assume getWithdrawalAmount and getDepositAmount are async functions
        setBalance(withdraw - deposit);   
    }

    return(
    <>
       
    <div className="mt-6 bg-gray-100 -mx-8 px-8 pt-8 justify-center">
        <text className="px-8 text-1xl"></text>
    </div>
     <h1 className="mt-4 text-4xl text-center mb-4">ACTIVITY PORTAL</h1>


    <div className="center">
        {isToggled ? 

            <div className="mt-12 ml-20 grow flex items-center">
            <div className="mb-64">
                <h3 className="mt-2 text-2xl text-left mb-4">RECENT:</h3>
                <div className="mr-20 mt-8 grid gap-2 gird-cols-4 md:grid-cols-4 lg:grid-cols-4">
                <label className="border p-4 flex rounded-2xl gap-2 items-center">
                    <input type="button"  name="24/7 Camera"></input>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    <span>User: {user.name} </span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center">
                    <input type="button"  name="24/7 Camera"></input>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    <span>Email: {user.email} </span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center">
                    <input type="button"  name="24/7 Camera"></input>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    <span>Deposit:{deposit}</span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center">

                    <input type="button"  name="24/7 Camera"></input>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    <button onClick={fetchBalance}>Balance: {balance}</button>
                </label>

                <div className="mt-4">
   
                </div>

            </div>              
            </div>

            </div>
        : ''}
        
    <div className="mr-20 mt-8 grid gap-2 gird-cols-2 md:grid-cols-2 lg:grid-cols-2">
                    <label className="border p-4 flex rounded-2xl gap-2 items-center">
                        <input type="button"  name="24/7 Camera"  onClick={handleToggle}></input>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                                <span>Accounts</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="button"  name="Locked" ></input>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>

                                <span>Transactions</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="button"  name="8/hr Delivery" ></input>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>

                                <span>Orders</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="button"   name="Temp Control" ></input>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                                </svg>

                                <span>Refunds</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="button"></input>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span>Deposit Times</span>
                            </label>
                            
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="button"></input>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                </svg>

                                <span>Recent Audits</span>
                            </label>
                      

                    </div>
                </div>
        
    </>

    );
}