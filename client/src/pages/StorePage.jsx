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

export default function StorePage(props) {
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
            <h1 className="text-3xl">Store Title: The Shoe Store </h1>
            {/*<PublockGallery publock={publock} />*/}
            <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div>
                    <div className="my-4">
                        <h2 className="font-semibold text-2xl">Address: 0x71C7656EC7ab88b098defB751B7401B5f6d8976F</h2>
                        {/*{publock.description}*/}
                    </div>
                    {/*<b>Starting Hours:  </b>{publock.startTime}<br />*/}
                    <b>Last Minted Token:  </b>20<br />
                    {/*<b>Ending Hours: </b>{publock.endTime}<br />*/}
                    <b>Max Supply: </b>230<br />
                     {/*Max capacity measured in ounces: {publock.maxCapacity}*/}

                     
                    <div className="py-3 px-4 border-t mt-10">
                        <label>IPFS Hash Upload Photo Link:</label>
                        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
                    </div>
                     
                    <div className="mt-10">
                    <b>MINT NFTS: </b>
                    <div className="mt-4 mr-20">

                    <input type="number" placeholder="Number Of Tokens" />
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Description"/>
                    <button className="mt-2 primary">Mint</button>

                    </div>
                    </div>
                     
                </div>
     
                <div className="mt-60" >
                    {/*<BookingWidget publock={publock} isConnected={isConnected}/>*/}
                    <MintingWidget publock={publock} isConnected={isConnected}/>
                </div>
            </div>

            <div className="bg-white -mx-8 px-8 py-8 border-t">
                <div>
                    <h2 className="font-semibold text-2xl">Extra Data</h2>
                </div>
                {/*<div className="mb-4 mt-2 text-sm text-gray-700 leading-5">{publock.extraInfo}*/}
                <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">Earned: 100ETH
                </div>
            </div>

        </div>
    );
}