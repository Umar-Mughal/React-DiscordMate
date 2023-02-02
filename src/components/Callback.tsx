import React, {FC, useEffect} from 'react'
import {Navigate, useSearchParams} from "react-router-dom";
import useApi from "../hooks/useApi";
import {FRONTEND_URL, SERVER_URL} from "../utils/constants";
import axios from "axios";

const Callback: FC = (): JSX.Element => {
    const [searchParams] = useSearchParams()
    const responseType = searchParams.get('response_type');
    const scope = searchParams.get('scope');
    const code = searchParams.get('code');

    const { call, rawResponse } = useApi({
        method: 'GET',
    })



    const setCookie = async (code: string): Promise<void> => {

       const response = await fetch(`${SERVER_URL}/callback?code=${code}`, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": `${FRONTEND_URL}`
            },
        })


        // const response = await axios.get(
        //     `${SERVER_URL}/callback?code=${code}`,
        //     {
        //         data: {
        //             code
        //         },
        //         headers: {
        //             "Access-Control-Allow-Origin": `${FRONTEND_URL}`,
        //         },
        //         withCredentials: true,
        //     },
        // );

        console.log("callback response-------------", response.json())

    }

    useEffect(() => {
        if(code){
            setCookie(code)
        }
    }, [code])

    useEffect(() => {
        if (rawResponse) {
            console.log(rawResponse)
            if(rawResponse && rawResponse.data.message){
               // <Navigate to="/dashboard" />
            }
        }
    }, [rawResponse])
  return (
    <div className="flex flex-col mb-5 bg-transparent items-center justify-center gap-2 w-full text-sm md:text-md">
      <h1>Code is: {code}</h1>
      <h1>responseType is: {responseType}</h1>
      <h1>scope is: {scope}</h1>
    </div>
  )
}

export default Callback
