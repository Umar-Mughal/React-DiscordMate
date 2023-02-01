import React, {createContext, useEffect, useState} from "react";
import {SERVER_URL} from "../utils/constants";

export type ApiContextType = {
    apiData: null | any
    setApiData: any
};

export const ApiContext = createContext<ApiContextType | null>(null);

function ApiContextProvider({children}: any): React.ReactElement{

    const checkAuth = () => {
        fetch(`${SERVER_URL}/load`, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setApiData(res.clients);
            })
            .catch((err) => {
                setApiData(null);
            });
    };

    useEffect(() =>{
        checkAuth()
    },[])

    const [apiData,setApiData]= useState(null)
    return(
        <ApiContext.Provider value={{apiData, setApiData}}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiContextProvider
