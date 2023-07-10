import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PhotosUploader from "./PhotosUploader";
import MintingWidget from "./MintingWidget";


//You can edit the store from this page from this page as well wether its a live or chains tore

export default function DashboardWidget(props) {
    const {id} = useParams();
    const [publock, setPublock] = useState(null);
    const { address, isConnected } = props;
    const [addedPhotos, setAddedPhotos] = useState([]);

    //this might be where the map goes
    //useEffect(() => {
        //if(!id) {
            //return;
        //}
        //axios.get(`/store`).then(response => {
            //setPublock(response.data);
        //}); 
    //}, [id]); 

    //if(!publock) return '';

    return (
        <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
            <div className="mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div>
    
                     <div className="mt-20">
                    <b>MINT Booking Pass: </b>
                    <div className="mt-4 mr-20">

                    <input type="number" placeholder="Stake Amount: Min 1000 USD" />
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Description"/>
                    <button className="mt-2 primary">Mint</button>

                    </div>
                    </div>

                    <div className="mt-10">
                    <b>CLAIM FEES: 100</b>
                    <div className="mt-4 mr-20">
                    <button className="mt-2 primary">CLAIM STORAGE FEES</button>

                    </div>
                    </div>

                    <div className="mt-10">
                    <b>CLAIM FEES FROM CONTRACT: </b>
                    <div className="mt-4 mr-20">
                    <input type="text" placeholder="Store Address"/>
                    <button className="mt-2 primary">CLAIM</button>

                    </div>
                    </div>


                 
                     
                </div>
            </div>

            <div className="bg-white -mx-8 px-8 py-8 border-t">
             
            </div>

        </div>
    );
}