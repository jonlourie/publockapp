import React, { useEffect } from "react";
import {Map, Marker, GoogleApiWrapper} from "google-maps-react";
import { useState } from "react";

//we are passing coordinates from the search page into here 
function PublocksMap({locations, google, setHighLight}) {

    //map the points
    const [center, setCenter] = useState();
    useEffect(() => {
        var arr = Object.keys(locations);
        var getLat = (key) => locations[key]["lat"];
        var avgLat = arr.reduce((a, c) => a + Number(getLat(c)), 0) / arr.length;

        var getLat = (key) => locations[key]["lng"];
        var avgLng = arr.reduce((a, c) => a + Number(getLat(c)), 0) / arr.length;

        setCenter({lat:avgLat, lng:avgLng})

    }, [locations]);

    //draw the map
    return (
        <>
            {center && (
                <Map
                    google={google}
                    containerStyle={{
                        width: "50vw",
                        height: "calc(100vh - 135px)",
                    }}
                    center={center}
                    initialCenter={locations[0]}
                    zoom={13}
                    disableDefaultUI={true}

                >
                    {/* this is why the map is not working initialCenter={locations[0]}*/}

                    {/*{locations.map((coords, i) => (
                        <Marker position={coords} onClick={() => setHighLight(i)} />
                    ))}*/}

                    {locations.map((coords, i) => (
                        <Marker position={coords} onClick={() => setHighLight(i)} />
                    ))}

                </Map>
            )}
        </>

    );
  
}
export default GoogleApiWrapper({
    apiKey:"" //a google api key will make the map look way better 
}) (PublocksMap);
