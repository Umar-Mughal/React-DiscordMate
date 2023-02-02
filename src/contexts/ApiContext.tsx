import React, {createContext, useEffect, useState} from "react";
import {FRONTEND_URL, SERVER_URL} from "../utils/constants";
import axios from "axios";

export type ApiContextType = {
    apiData: null | any
    setApiData: any
};

export const ApiContext = createContext<ApiContextType | null>(null);

function ApiContextProvider({children}: any): React.ReactElement{

    const [apiData,setApiData]= useState(null)

    const checkAuth = async () => {
        try{
            const response = await axios.get(
                `${SERVER_URL}/load`,
                {
                    headers: {
                        "Access-Control-Allow-Origin": `${FRONTEND_URL}`,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                },
            );

            setApiData(response.data.clients);
        }catch (e){
            setApiData(null);
        }

        // fetch(`${SERVER_URL}/load`, {
        //     credentials: 'include',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // })
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setApiData(res.clients);
        //     })
        //     .catch((err) => {
        //         setApiData(null);
        //     });

    };

    useEffect(() =>{
        checkAuth()
    },[])

    return(
        <ApiContext.Provider value={{apiData, setApiData}}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiContextProvider
