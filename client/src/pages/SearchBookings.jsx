import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PublocksMap from "../components/PublocksMap";
import { useLocation } from "react-router-dom";

//Bookings for the merchant 
export default function SearchBookings() {
    const { state: searchFilter } = useLocation();

    const [highLight, setHighLight] = useState();
    const [publocks,setPublocks] = useState([]);
    const [filterPublocks, setFilterPublocks] = useState([]);
    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {

        async function fetchPublockList() {

            axios.get('/publocks').then(response => {
                setPublocks(response.data);
            });


            let publockLocation = publocks.address;

            //I think we need a filter function here
            //I think we are going to do the location via smart contract and long and lat as well - exact address we will do by mongo DB
            //my attemp at mapping these coordinates 
            publockLocation.filter(searchFilter.locationQuery).then(response => {
                setFilterPublocks(response.data);
            });

            if(publockLocation === searchFilter.locationQuery) {
                setFilterPublocks(publockLocation);
            }

            {/*let cords = [];
                filterPublocks.forEach((e) => {
                cords.push({lat:, long:})
            });*/}

        }

        fetchPublockList();

    },[searchFilter]);
   
     {/*Temporary*/}
    let cords = ["42.360226, -71.05483"];

    return (

      <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
       <div className="my-8">
            <div className="bg-gray-200 p-6 mb-6 my-6 rounded-2xl flex items-center justified-between">
                <h2 className="text-3xl">{searchFilter.locationQuery}</h2>
            </div>
       </div>
       <hr className="line"/>
        <div className="rentalsContent">
            <div className="rentalsContentL" >
                {/*e used to be publock*/}
                Publocks Available For {searchFilter.locationQuery}
                    {filterPublocks.length > 0 && filterPublocks.map((e,i) => (
                    <>
                    <hr className="line2" />
                    <Link to={'/publock/'+e._id}>
                    <div className={highLight == i ? "rentalDivH ": "rentalDiv overflow-hidden"}>
                        {e.photos?.[0] && (
                            <img className="rentalImg" src={'http://localhost:4000/uploads/'+e.photos?.[0]} alt=""/>
                        )}
                        <div className="rentalInfo">
                            <div className="rentalTitle">{e.title}</div>
                            <div className="rentalDesc">{e.description}</div>
                            Address:<div className="rentalDesc">{e.address}</div>
                        </div>
                        <div className="price">
                            ${e.price}  / Ounce 
                        </div> 
                    </div>
                    </Link>
                    </>
                    ) )}
              
            </div>
            <div className="rentalsContentR" >

                {/*We may need to have lat and long variables in our publocks*/}
                <PublocksMap locations={cords} setHighLight={setHighLight}/>

            </div>
        </div>
       </div>
   
    );
  };
  