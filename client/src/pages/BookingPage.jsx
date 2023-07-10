import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from  "axios";
import AddressLink from "../AddressLink";
import PublockGallery from "../PublockGallery";
import BookingDates from "../BookingDates";

//this is for pending bookings for the merchant 
export default function BookingPage () {
    const {id} = useParams();
    const [booking, setBooking] = useState(null);
    useEffect(()  => {
        if(id) {
            axios.get('/bookings').then(response => {
                const foundBooking = response.data.find(({_id}) => _id === id)
                if(foundBooking) {
                    setBooking(foundBooking);
                }
            });
        }
    }, [id]);

    if(!booking) {
        return '';
    }

    return (
        <div className="my-8">
            <h1 className="text-3xl">{booking.publock.title}</h1>
            <AddressLink className="my-2 block">{booking.publock.address}</AddressLink>
            <div className="bg-gray-200 p-6 mb-6 my-6 rounded-2xl flex items-center justified-between">
                <div>
                    <h2 className="text-2xl mb-4">Your booking information:</h2>
                    <BookingDates booking={booking}/>
                </div>
                <div className="bg-primary p-6 text-white rounded-2xl">
                    <div>Total price</div>
                    <div className="text-2xl">${booking.price}</div>
                </div>
            </div>
            <PublockGallery publock={booking.publock} />
        </div>
    );
}