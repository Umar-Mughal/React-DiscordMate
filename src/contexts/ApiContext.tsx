import React, {createContext, useState} from "react";

export type ApiContextType = {
    apiData: null | any
    setApiData: any
};

export const ApiContext = createContext<ApiContextType | null>(null);

function ApiContextProvider({children}: any): React.ReactElement{
    const [apiData,setApiData]= useState(null)
    return(
        <ApiContext.Provider value={{apiData, setApiData}}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiContextProvider
