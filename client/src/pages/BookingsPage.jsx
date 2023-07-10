import { useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import axios from "axios";
import PublockImg from "../PublockImg";
import {format} from "date-fns";
import {differenceInCalendarDays} from "date-fns";
import { Link } from "react-router-dom";
import BookingDates from "../BookingDates";
import { useContext } from "react";
import { UserContext } from "../UserContext";

//Bookings for the merchant 
export default function BookingsPage() {
    const [publocks, setPublocks] = useState([]);

    const {deposit, user} = useContext(UserContext);

    useEffect(() => {
        axios.get('/user-publocks').then(({data}) => {
            setPublocks(data);
        });

    }, []);
    return (
        <div>
            <AccountNav />
            <div className="text-center">

                   <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={"/createstore/new"}>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                       <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                   </svg>
                       Make New Withdrawel
                   </Link>
               </div>

               <div className="mt-4">
                {publocks.length > 0 && publocks.map(publock => (
                    <Link to={'/account/publocks/'+publock._id} className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl">
            
                        <div className="grow-0 shrink">
                        <h2 className="text-xl">Note: {publock.title}</h2>
                        <p className="text-sm mt-2">Last Withdrawal: {publock.price}</p>
                        <p className="text-sm mt-2">Balance: {user.name} ({user.balance})</p>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
}