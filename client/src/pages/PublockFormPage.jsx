import PhotosUploader from "../PhotosUploader";
import Perks from "../Perks";
import { useContext, useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";
import { max, set } from "date-fns";

export default function PublockFormPage() {

    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [maxCapacity, setMaxCapacity] = useState(300);
    const [price, setPrice] = useState(0.20); //pricing has to be by unit
    const [redirect, setRedirect] = useState(false);

    const [balance, setBalance] = useState(0);


    const {setDeposit, user} = useContext(UserContext)

    const ctx = useContext(UserContext);

    const updateBalance = async (amount) => {
        try {
          const response = await axios.put('balance', { amount });
          console.log(response.data);
          setRedirect(true);

        } catch (err) {
          console.error(err);
        }
      };

      useEffect(() => {
        const fetchBalance = async () => {
          try {
            const response = await axios.get('/profile');
            setBalance(response.data.balance); // initialize the balance when the component mounts
          } catch (err) {
            console.error(err);
          }
        };
    
        fetchBalance();
      }, []);
    
    function inputHeader(text) {
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        );
    }
    function inputDescription(text) {
        return(
            <p className="text-gray-500 text-sm">{text}</p>

        );
    }
    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    }

    async function savePublock(ev) {
        ev.preventDefault();

        const publockData = {
            title,
            maxCapacity, 
        } 

        setDeposit(maxCapacity);
        //ctx.deposit.push(maxCapacity);

        //await axios.put('/balance', {maxCapacity});

        if(id) {
            //update
            await axios.put('/publocks', {
                id, ...publockData
            });
            setRedirect(true);
        } else {
            //newPlace
            await axios.post('/publocks', publockData);
            setRedirect(true);
        }

    }

    if(redirect) {
        return <Navigate to={'/account/publocks'} />
    }

    return(
        <form onSubmit={savePublock}>

        <AccountNav />
        
        {preInput('Name','What is yor name?')}
        <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="Galvin Belson"/>
        
        {preInput('Amount','Amount You Want To Deposit')}
        <input type="number" value={maxCapacity} onChange={ev => setMaxCapacity(ev.target.value)} placeholder="5000"/>

        <button onClick={() => updateBalance(maxCapacity)}>Deposit</button>

        <div className="text-center max-w-lg mx-auto">
            Current Balance {user.name} ({balance})<br />
        </div>

        <div>
            <button className="primary my-4">DEPOSIT</button>
        </div>
    </form>
    );
}