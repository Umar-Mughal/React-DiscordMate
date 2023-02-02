import React, {FC, useEffect, useState} from 'react'
import {Navigate, useSearchParams} from "react-router-dom";
import useApi from "../hooks/useApi";
import {FRONTEND_URL, SERVER_URL} from "../utils/constants";
import axios from "axios";

const Callback: FC = (): JSX.Element => {
    const [searchParams] = useSearchParams()
    const responseType = searchParams.get('response_type');
    const [loading, setLoading] = useState<boolean>(true);
    const scope = searchParams.get('scope');
    const code = searchParams.get('code');

    const setCookie = async (code: string): Promise<void> => {
        try{
            const response = await axios.get(
                `${SERVER_URL}/callback?code=${code}`,
                {
                    data: {
                        code
                    },
                    headers: {
                        "Access-Control-Allow-Origin": `${FRONTEND_URL}`,
                    },
                    withCredentials: true,
                },
            );
            if(response && response.data.message){
                setLoading(false)
            }
        }catch (e){}
    }

    useEffect(() => {
        if(code){
            setCookie(code)
        }
    }, [code])

    if(!loading){
        return <Navigate to="/dashboard" />
    }
  return (
      <div className="h-screen bg-white">
          <div className="flex justify-center items-center h-full">
              <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt=""/>
          </div>
      </div>
  )
}

export default Callback
