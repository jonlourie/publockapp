import PhotosUploader from "../PhotosUploader";
import StoreTraits from "../StoreTraits";
import { useEffect, useState } from "react";
import UserNav from "../UserNav";
import { Navigate, useParams } from "react-router-dom";
import TagCreator from "../components/TagCreator";
import axios from "axios";

export default function TagCreationPage() {

    const [addedPhotos, setAddedPhotos] = useState([]);
    const [nftAddress, setNFTAddress] = useState('');
    const [nftId, setNftId] = useState('');
    const [tagNumber, setTagNumber] = useState([]);

    const [isToggled, setToggle] = useState(false); // initial state is 'false'

    const handleToggle = () => {
      setToggle(!isToggled); // switches the state to the opposite value
    };
  
    function generateTag(ev) {

    }
    
    return(
    <>
    <form>
        <UserNav />

        <br></br>

        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>

        <br></br>
    </form>
            
    <div>
        
        <input type="text" value={nftAddress} onChange={ev => setNFTAddress(ev.target.value)} placeholder="NFT Address"/>
        <input type="text" value={nftId} onChange={ev => setNftId(ev.target.value)} placeholder="ID"/>
        <input type="text" value={tagNumber} onChange={ev => setTagNumber(ev.target.value)} placeholder="List numbers _ through _ to create tags for"/>
        <div>
            <button className="bg-gray-200 primary my-4" onClick={handleToggle}>Generate Tags</button>
        </div>
        <div>
        {isToggled? 
       
        <div className="grid gap-10 grid-cols-4 md:grid-4">
            <TagCreator address={nftAddress} id={nftId} />
            <TagCreator address={nftAddress} id={nftId} />
            <TagCreator address={nftAddress} id={nftId} />
            <TagCreator address={nftAddress} id={nftId} />
            <TagCreator address={nftAddress} id={nftId} />
            <TagCreator address={nftAddress} id={nftId} />
            <TagCreator address={nftAddress} id={nftId} />
            <TagCreator address={nftAddress} id={nftId} />
        </div>
        : ''
       
        }
        </div>
  
    </div>
 </>
    );
}