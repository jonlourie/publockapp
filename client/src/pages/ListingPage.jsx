import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; // eventually we will need to connect to the backend

export default function ListingPage(){

    const [itemId, setItemId] = useState('');
    const [itemAddress, setItemAddress] = useState('');
    const [price, setItemPrice] = useState('');
    const [publockId, setPublockId] = useState('');  
    const [reason, setReason] = useState('');  
    
    return(
        <>
        <div className="mt-6 bg-gray-100 -mx-8 px-8 pt-8 justify-center">
            <text className="px-8 text-1xl"></text>
        </div>
        <div className="mt-16 grow flex items-center justify-around">
            <div className="mb-64  ml-8">
                <h1 className="text-4xl text-center mb-4">LIST NFT</h1>
                <form className="max-w-md mx-auto">
                    <input type="text" placeholder="Item ID" 
                         value={itemId}
                         onChange={ev => setItemId(ev.target.value)}/>
                    <input type="text" placeholder={'Address'}
                        value={itemAddress}
                        onChange={ev => setItemAddress(ev.target.value)}/>           
                    <input type="text" placeholder="Publock ID"
                        value={publockId}
                        onChange={ev => setPublockId(ev.target.value)}/>
                    <input type="text" placeholder="Trading Address"
                        value={reason}
                        onChange={ev => setReason(ev.target.value)}/>
                    <button className="primary">List</button>
            </form>
            </div>
            <div className="mb-64 mr-8">
                <h1 className="text-4xl text-center mb-4">UNLIST NFT</h1>
                <form className="max-w-md mx-auto">
                    <input type="text" placeholder="Item ID" 
                         value={itemId}
                         onChange={ev => setItemId(ev.target.value)}/>
                    <input type="text" placeholder={'Address'}
                        value={itemAddress}
                        onChange={ev => setItemAddress(ev.target.value)}/>           
                    <input type="text" placeholder="Publock ID"
                        value={publockId}
                        onChange={ev => setPublockId(ev.target.value)}/>
                    <input type="text" placeholder="Receiver Address?"
                        value={reason}
                        onChange={ev => setReason(ev.target.value)}/>
                    <button className="primary">Unlist</button>
            </form>
            </div>
        </div>
        </>
    );
}