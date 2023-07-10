import { useContext, useEffect, useState } from "react";
import {differenceInCalendarDays} from "date-fns";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext.jsx";
import PhotosUploader from "./PhotosUploader.jsx";
import NFTPhotoUploader from "./NFTPhotoUploader.jsx";


export default function MintingWidget({publock, isConnected}) {

    //pricing needs to be completely different and should be week not day also we need size and weight agian reference ship bob
    const [storeStart, setStoreStart] = useState('');
    const [storeEnd, setStoreEnd] = useState('');
    const [numberOfParcels, setNumberOfParcels] = useState(1);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [redirect, setRedirect] = useState('');
    const {user} = useContext(UserContext);
    const [addedPhotos, setAddedPhotos] = useState([]);


    //useEffect(() => {
        //if(user) {
            //setName(user.name);
        //}
    //}, [user]);

    //let numberOfNights = 0;
    //if(storeStart && storeEnd) {
        //numberOfNights = differenceInCalendarDays(new Date(storeEnd), new Date(storeStart));
    //}


    //async function bookThisPublock(){
        //const response = await axios.post('/bookings', {
            //storeStart,storeEnd,numberOfParcels,name,phone,
            //publock:publock._id, 
            //price:numberOfNights * publock.price,
        //});

        //const bookingId = response.data._id;
        //setRedirect(`/account/bookings/${bookingId}`);
    //}

    if(redirect) {
        return <Navigate to={redirect} />
    }

    return (

        <div className="bg-white shadow p-4 rounded-2xl -mt-14">
        <div className="text-2xl text-center">
            {/*Price: ${publock.price} / per ounce*/}
            Trade NFTS
        </div>
        <div className="border rounded-2xl mt-4">
            <div className="flex">
            <div className="py-3 px-4">
                <label>Redemption Start:</label>
                {/*<input type="date" 
                    value={storeStart} 
                    onChange={ev => setStoreStart(ev.target.value)}/>*/}
                    <input type="date" 
                    onChange={ev => setStoreStart(ev.target.value)}/>
            </div>
            <div className="py-3 px-4 border-l">
                <label>Redemption End:</label>
                {/*<input type="date" 
                value={storeEnd} 
                onChange={ev => setStoreEnd(ev.target.value)}/>*/}
                <input type="date" 
                onChange={ev => setStoreEnd(ev.target.value)}/>
                </div>
            </div>
        </div>

        <div className="py-3 px-4 border-l">
            {/*<label> Number of parcels:</label>
            <input type="number" 
            value={numberOfParcels} 
            onChange={ev => setNumberOfParcels(ev.target.value)}/>*/}
            <label> Number Of Tokens:</label>
            <input type="number" 
            onChange={ev => setNumberOfParcels(ev.target.value)}/>
        </div>

        <div className="py-3 px-4 border-l">
            {/*<label> Number of parcels:</label>
            <input type="number" 
            value={numberOfParcels} 
            onChange={ev => setNumberOfParcels(ev.target.value)}/>*/}
            <label> Publock ID:</label>
            <input type="number" 
            onChange={ev => setNumberOfParcels(ev.target.value)}/>
        </div>


        <div className="py-3 px-4 border-l">
            {/*<label> Number of parcels:</label>
            <input type="number" 
            value={numberOfParcels} 
            onChange={ev => setNumberOfParcels(ev.target.value)}/>*/}
            <label> Trade Wallet Address:</label>
            <input type="text" 
            onChange={ev => setNumberOfParcels(ev.target.value)}/>
        </div>   

        {/*{numberOfNights > 0 && (
            <div className="py-3 px-4 border-l">
            <label>Your Full Name:</label>
            <input type="text" 
                value={name} 
                onChange={ev => setName(ev.target.value)}/>

            <label>Phone Number:</label>
            <input type="tel" 
                value={phone} 
                onChange={ev => setPhone(ev.target.value)}/>

            <input type="tel" 
                onChange={ev => setPhone(ev.target.value)}/>
            </div>
        )}*/}

        {/*Disable this button*/}
         {/*<button onClick={bookThisPublock} className="swapButton primary mt-4" disabled={!isConnected}>
            Ship to This Publock
            {numberOfNights > 0 && (
                <span> ${numberOfNights * publock.price}</span>
            )}
        </button>
      </div>*/}
      <button className="swapButton primary mt-4" disabled={!isConnected}>
           SUBMIT            
        </button>
      </div>

    );
}