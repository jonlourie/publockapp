import PhotosUploader from "../PhotosUploader";
import StoreTraits from "../StoreTraits";
import { useContext, useEffect, useState } from "react";
import UserNav from "../UserNav";
import { Navigate, useParams } from "react-router-dom";
import TagCreator from "../components/TagCreator";
import axios from "axios";
import AccountNav from "../AccountNav";
import { UserContext } from "../UserContext";

export default function CreateStore() {

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
    const [nftAddress, setNFTAddress] = useState('');
    const [nftId, setNftId] = useState('');
    const [tagNumber, setTagNumber] = useState([]);

    const [isToggled, setToggle] = useState(false); // initial state is 'false'

    const {setWithdraw} = useContext(UserContext)

    const [balance, setBalance] = useState(0);

    const handleToggle = () => {
      setToggle(!isToggled); // switches the state to the opposite value
    };

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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

    function generateTag(ev) {

    }

    async function savePublock(ev) {
        ev.preventDefault();

        const publockData = {
            title,
            price,
        } 

        setWithdraw(price);

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
    <>
        <form onSubmit={savePublock}>
        <AccountNav />

        <br></br>
        
        {preInput('Name','What is your name!')}
        <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="Galvin Belson"/>
        
        <br></br>
        
        {preInput('Amount','how much will you take out?')}
        <input type="number" value={price} onChange={ev => setPrice(ev.target.value)} placeholder="5000"/>
        
        <br></br>
        <button onClick={() => updateBalance(-price)}>Deposit</button>

        <div className="text-center max-w-lg mx-auto">
            Current Balance({balance})<br />
        </div>

        <div>
            <button className="primary my-4">WITHDRAW</button>
        </div>
    </form>
 </>
    );
}