import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import BookingWidget from "../BookingWidget";
import PublockGallery from "../PublockGallery";
import AddressLink from "../AddressLink";
import MintingWidget from "../MintingWidget";
import NFTPhotoUploader from "../NFTPhotoUploader";
import PhotosUploader from "../PhotosUploader";

//You can edit the store from this page from this page as well wether its a live or chains tore

export default function WrapExistingNFT(props) {
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
            {/*<h1 className="text-3xl">{publock.title}</h1>*/}
            <h1 className="text-3xl">Back Your Existing NFTS With Physical Items</h1>
            {/*<PublockGallery publock={publock} />*/}
            <div className="mt-10 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div>

                <b>Add NFT: </b>
                    <div className="mt-4 mr-20">

                    <input type="number" placeholder="TokenID" />
                    <input type="text" placeholder="Address"/>

                    </div>

                    <div className="py-3 px-4  mt-10">
                        <label>IPFS Hash Upload Photo Link:</label>
                        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
                    </div>
                     
                    <div className="mt-10">
                    <b>MINT WRAPPER: </b>
                    <div className="mt-4 mr-20">

                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Description"/>
                    <button className="mt-2 primary">Mint</button>

                    </div>
                    </div>
                     
                </div>
     
                <div className="mt-20" >
                    {/*<BookingWidget publock={publock} isConnected={isConnected}/>*/}
                    <MintingWidget publock={publock} isConnected={isConnected}/>
                </div>
            </div>

        </div>
    );
}