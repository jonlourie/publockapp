import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {data} from "autoprefixer"

//const {data} = 
//setUser(data);

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    const [deposit, setDeposit] = useState(null);
    const [withdraw, setWithdraw] = useState(null);
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        if(!user) {
            axios.get('/profile').then(({data})=> {
                setUser(data);
                setReady(true);
            });    
        }
      }, []);
    return(
        <UserContext.Provider value={{user,setUser,ready,setDeposit, deposit, withdraw, setWithdraw}}>
            {children}
        </UserContext.Provider>
    );
}

