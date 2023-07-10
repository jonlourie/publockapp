import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
//import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
import axios from "axios";
import { Arrow, Eth } from "@web3uikit/icons";
import { useConnect, useAccount} from "wagmi";
import {MetaMaskConnector} from "wagmi/connectors/metaMask";

export default function IndexPage() {

    //Very Similiar to how we are getting publocks from our database we can do it from blockchain 
    //We may be able to use moralis instead as well for some reason Axios keeps crashing 
    const [publocks,setPublocks] = useState([]);
    useEffect(() => {
        axios.get('/publocks').then(response => {
            setPublocks(response.data);
        });
    }, []);

    const [isToggled, setToggle] = useState(false); // initial state is 'false'
    const { address, isConnected } = useAccount();
      
    const handleToggle = () => {
        setToggle(!isToggled); // switches the state to the opposite value
    };

    const { connect } = useConnect({
        connector: new MetaMaskConnector(),
    });

    return (
        <>
        <div className="mt-8">
        <section className="main_banner fixed">
            <button className="airdropPopUp_btn" onClick={handleToggle}>
                {isToggled ? 'HOME' : 'LOCATIONS'}
            </button>

            {isToggled ?  <div className="px-8 justify-center text-1xl">GO BACK TO PUBLOCK HOME PAGE</div>
                :
                <div className="px-8 justify-center text-1xl">SEARCH LOCAL PUBLOCK BRANCHES AND IN-PERSON DEPOSITS</div>
            }
        </section>
        <div className="mt-1 bg-gray-100 -mx-8 px-8 pt-8 justify-center">
            <div className="px-8 text-1xl"></div>
        </div>
        </div>

        {isToggled ? 
       
        <div className="mt-3 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {publocks.length > 0 && publocks.map(publock => (
                <Link to={'/publock/'+publock._id}>
                <div className="bg-gray-500 mb-2 rounded 2xl flex">
                    {publock.photos?.[0] && (
                         <img className="rounded-2xl object-cover aspect-sqaure" src={'http://localhost:4000/uploads/'+publock.photos?.[0]} alt=""/>
                    )}
                    </div>
                    <h3 className="font-bold">{publock.address}</h3>
                    <h2 className="text-sm text-gray-500 ">{publock.title}</h2>
                    <div className="mt-1">
                        <span className="font-bold">${publock.price}</span> per ounce
                    </div>
                </Link>
            )) }
        </div>
        :
        <div className="-mt-7 -mx-8 px-8 pt-8">
        <section className="main">

        <section className="heroSection">
          <h1 className="bayc_data__title ">WELCOME TO PUBLOCK THE FUTURE OF BANKING!</h1>
          {isConnected? 
            <section className="bayc_data">
    
            <Link to={"/account/publocks/new"}>
              <button className="viewCollection_btn">
                DEPOSIT
              </button>
            </Link>
            <Link to={'/createstore/new'} className="flex rounded-full px-1">
              <button className="viewCollection_btn">
                WITHDRAW
              </button>
            </Link>
            <Link to={'/createstore/new'} className="flex rounded-full px-1">
              <button className="viewCollection_btn">
                DOCS
              </button>
            </Link>
              <Arrow fontSize="20px" className="arrow"/>
            </section>
            :

            <section className="bayc_data"> 
                <button className="viewCollection_btn" onClick={connect}>
                    CONNECT WALLET
                </button>   
            </section>
        } 
          
        </section>
        </section>
        </div>
        }
        </>             
    );
}