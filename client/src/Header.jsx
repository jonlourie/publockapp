import { useContext, useState} from "react";
import {Link} from "react-router-dom";
import { UserContext } from "./UserContext.jsx";
import { useConnect, useAccount} from "wagmi";
import {MetaMaskConnector} from "wagmi/connectors/metaMask";

export default function Header(){

    //normally we get props from the app componant and destrruct to fetch the wagmi hooks from our app.jsx but we cant with heading 

    const {user} = useContext(UserContext);
    const [locationQuery, setLocationQuery] = useState();

    const { address, isConnected } = useAccount();
    const { connect } = useConnect({
          connector: new MetaMaskConnector(),
    });

    return(

        <div> 
        <header className="flex justify-between">

            <Link to={'/'} className="flex items-center gap -1">
            <svg xmlns="http://www.w3.org/2000/svg"  width="50" zoomAndPan="magnify" viewBox="0 0 37.5 37.499999" height="50" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g/></defs><g fill="#000000" ><g transform="translate(29.425093, 2.588686)"><g>
                <path d="M -16.265625 9.867188 L -16.265625 20.304688 C -16.265625 23.011719 -17.96875 25.289062 -20.347656 26.191406 L -20.347656 29.984375 C -15.9375 28.917969 -12.613281 24.835938 -12.613281 20.304688 L -12.613281 10.007812 C -12.613281 8.738281 -11.730469 7.648438 -10.398438 7.648438 C -9.046875 7.648438 -8.203125 8.65625 -8.140625 9.867188 C -8.164062 11.894531 -10.707031 12.839844 -12.121094 11.507812 L -12.121094 15.464844 C -11.609375 15.667969 -11.015625 15.710938 -10.398438 15.710938 C -7.15625 15.710938 -4.53125 13.066406 -4.53125 9.867188 C -4.53125 6.664062 -7.15625 4 -10.398438 4 C -13.679688 4 -16.265625 6.664062 -16.265625 9.867188 Z M -10.398438 19.8125 C -4.902344 19.8125 -0.410156 15.21875 -0.410156 9.867188 C -0.410156 4.367188 -4.902344 -0.0820312 -10.398438 -0.0820312 C -15.894531 -0.0820312 -20.347656 4.367188 -20.347656 9.867188 L -20.347656 25.679688 C -18.234375 24.816406 -16.757812 22.644531 -16.757812 20.304688 L -16.757812 9.867188 C -16.757812 6.417969 -13.886719 3.507812 -10.398438 3.507812 C -6.910156 3.507812 -4.039062 6.417969 -4.039062 9.867188 C -4.039062 13.289062 -6.933594 16.222656 -10.398438 16.222656 C -11.015625 16.222656 -11.609375 16.078125 -12.121094 15.957031 L -12.121094 19.648438 C -11.609375 19.773438 -11.015625 19.8125 -10.398438 19.8125 Z M -10.398438 19.8125 "/></g></g></g>
            </svg>
            <span className="font-bold text-gray-500 text-xl">publock</span>
            </Link>

            <div>

                {/*Hide this button until you log into metamask magnifine glass*/}
                {isConnected ? (
                    <div className='flex gap-2 justify-center font-bold border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300 text-gray-400 ml-20'>
                    <>
                    {/*we have to deconstruct location query oin the search spage
                    we could also input the location parameters as props to the page maybe
                    */}
                    <input type="text" 
                  
                        value={locationQuery} 
                        onChange={ev => setLocationQuery(ev.target.value)} 
                        placeholder="Search publock locations"
                    />

                    <Link to={'/search'} 
                        className='bg-primary text-white p-4 rounded-full'
                        state={{
                            locationQuery: locationQuery,
                        }}
                    >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                    </Link>
                    </>
                    </div>
                ) : 
                    <div className='flex gap-2 justify-center font-bold border border-gray-300 rounded-full py-3 px-4 shadow-md shadow-gray-300 text-gray-400 ml-10'>
                    <>
                    <div id="intro_tabs">Infinate</div>
                    <div className='border-l border-gray-300' id="intro_tabs"></div>
                    <div id="intro_tabs">Global</div>
                    <div className='border-l border-gray-300' id="intro_tabs"></div>
                    <div id="intro_tabs">Banking</div>
                    </>
                    </div>
                }

            </div>

            <div className="flex items-center gap-2">

                <Link to={"/audit"} className="flex rounded-full px-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-pink-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </Link>
                <Link to={"/audit"} className="flex rounded-full px-1">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-8 h-8 text-gray-500" zoomAndPan="magnify" viewBox="0 0 375 374.999991"  preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="768ebfa823"><path d="M 37.5 14 L 355 14 L 355 375 L 37.5 375 Z M 37.5 14 " clipRule="nonzero"/></clipPath></defs><rect x="-37.5" width="450" fill="#ffffff" y="-37.499999" height="449.999989" fillOpacity="1"/><rect x="-37.5" width="450" fill="#ffffff" y="-37.499999" height="449.999989" fillOpacity="1"/><rect x="-37.5" width="450" fill="#ffffff" y="-37.499999" height="449.999989" fillOpacity="1"/><g clipPath="url(#768ebfa823)"><path fill="#a6a6a6" d="M 354.191406 285.449219 L 354.191406 106.84375 C 354.191406 105.671875 353.574219 104.550781 352.535156 103.960938 L 197.542969 14.527344 C 196.5 13.9375 195.242188 13.9375 194.203125 14.527344 L 39.183594 103.960938 C 38.113281 104.550781 37.5 105.671875 37.5 106.84375 L 37.5 285.449219 C 37.5 286.625 38.113281 287.746094 39.15625 288.335938 L 194.175781 377.769531 C 194.710938 378.0625 195.269531 378.222656 195.832031 378.222656 C 196.394531 378.222656 196.980469 378.089844 197.488281 377.769531 L 352.480469 288.335938 C 353.550781 287.746094 354.191406 286.652344 354.191406 285.449219 Z M 44.179688 112.640625 L 192.625 198.015625 L 192.625 369.171875 L 44.179688 283.527344 Z M 199.304688 369.039062 L 199.304688 197.882812 L 347.511719 112.613281 L 347.511719 283.503906 Z M 199.304688 369.039062 " fillOpacity="1" fillRule="nonzero"/></g></svg>
                </Link>
               
                <div className="flex items-center gap-2 border border-gray-300 rounded-full p-2 px-4">
                {/*Hide this button until you log into metamask dashboard connect*/}
                {isConnected ? (
                    <Link to={'/useraccount'} className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    </Link>
                ) : ''}


                {/*Make a notification icon here so that when you are logged into your wallet or your profile it displays a checkmakr
                this will save us from typeing a name when you log in or the address*/}

                <button className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden p-1'
                  onClick={connect}>
                        {/*{isConnected ? (address.slice(0.4) + "..." +address.slice(38)) : 'Connect'} -- figure out this part later*/}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                    
                    fill="currentColor" 
                    strokeWidth={1.5} 
                    className="w-6 h-6">
                    <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
                </svg>
                </button>

                <Link to={user?'/account':'/login'} className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>
                </Link>

                {/*If Metmask We Will Add The Burger*/}
                {!!user && (
                    <div>
                        {/*{user.name}*/}
                    </div>
                )}

                </div>
                

                
            </div>

        </header>
    </div>

    );
}
