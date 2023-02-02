import React, {FC, useEffect} from 'react'
import {Navigate, useSearchParams} from "react-router-dom";
import useApi from "../hooks/useApi";
import {SERVER_URL} from "../utils/constants";

const Callback: FC = (): JSX.Element => {
    const [searchParams] = useSearchParams()
    const responseType = searchParams.get('response_type');
    const scope = searchParams.get('scope');
    const code = searchParams.get('code');

    const { call, rawResponse } = useApi({
        method: 'GET',
    })



    const setCookie = async (code: string): Promise<void> => {
        // await call({
        //     url: '/callback',
        //     params: {
        //         code,
        //     },
        // })

        fetch(`${SERVER_URL}/callback`, {
            mode: 'no-cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("Callback api response:", res)
            })
            .catch((err) => {
            });
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
