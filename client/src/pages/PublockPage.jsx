import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import BookingWidget from "../BookingWidget";
import PublockGallery from "../PublockGallery";
import AddressLink from "../AddressLink";
import TagCreationWidget from "../TagCreationWidget";

export default function PublockPage(props) {
    const {id} = useParams();
    const [publock, setPublock] = useState(null);
    const { address, isConnected } = props;

    //this might be where the map goes
    useEffect(() => {
        if(!id) {
            return;
        }
        axios.get(`/publocks/${id}`).then(response => {
            setPublock(response.data);
        }); 
    }, [id]); 

    if(!publock) return '';

    return (
        <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
            <h1 className="text-3xl">{publock.title}</h1>
            <AddressLink>{publock.address}</AddressLink>
            <PublockGallery publock={publock} />
            <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div>
                    <div className="my-4">
                        <h2 className="font-semibold text-2xl">Description</h2>
                        {publock.description}
                    </div>
                    <b>Price Per Unit/Small:  </b>{publock.startTime}<br />
                    <b>Price Per Unit/Medium:  </b>{publock.startTime}<br />
                    <b>Price Per Unit/Large:  </b>{publock.startTime}<br />
                    <b>Base Fees %: </b>{publock.endTime}<br />
                     Current capacity ratio: {publock.maxCapacity} / {publock.maxCapacity}<br />
                </div>
                <div>
                    <BookingWidget publock={publock} isConnected={isConnected}/>
                </div>
            </div>
            <div className="bg-white -mx-8 px-8 py-8 border-t">
                <div>
                    <h2 className="font-semibold text-2xl">Generate Tags</h2>
                </div>
                <div className="text-center">
                    <TagCreationWidget />
               </div>
                
            </div>
            <div className="bg-white -mx-8 px-8 py-8 border-t">
                <div>
                    <h2 className="font-semibold text-2xl">Reviews</h2>
                </div>
                <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">{publock.extraInfo}
                </div>
            </div>
            <div className="bg-white -mx-8 px-8 py-8 border-t">
               
            </div>
        </div>
    );
}