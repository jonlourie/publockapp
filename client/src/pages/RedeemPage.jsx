import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; // eventually we will need to connect to the backend

export default function RedeemPage(){

    const [itemId, setItemId] = useState('');
    const [itemAddress, setItemAddress] = useState('');
    const [publockId, setPublockId] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');  
    const [city, setCity] = useState('');  
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    
    return(
        <div className="mt-20 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Redeem</h1>
                <form className="max-w-md mx-auto">
                    <input type="text" placeholder="Item ID" 
                         value={itemId}
                         onChange={ev => setItemId(ev.target.value)}/>
                    <input type="text" placeholder={'Store / Collection / Address'}
                        value={itemAddress}
                        onChange={ev => setItemAddress(ev.target.value)}/>           
                    <input type="text" placeholder="Validitor ID"
                        value={publockId}
                        onChange={ev => setPublockId(ev.target.value)}/>
                    <input type="text" placeholder="Address: 16 Clipper Way, Marblehead MA 01945"
                        value={shippingAddress}
                        onChange={ev => setShippingAddress(ev.target.value)}/>
                    <input type="text" placeholder="City: Marblehead"
                        value={city}
                        onChange={ev => setCity(ev.target.value)}/>
                    <input type="text" placeholder="State: MA"
                        value={state}
                        onChange={ev => setState(ev.target.value)}/>
                    <input type="text" placeholder="Zip: 01945"
                        value={zip}
                        onChange={ev => setZip(ev.target.value)}/>
                    <button className="primary">Submit</button>
            </form>
            </div>
        </div>
    );
}