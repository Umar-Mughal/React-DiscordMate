import React, {useContext} from "react";
import {ApiContext, ApiContextType} from "../../contexts/ApiContext";
import Dashboard from "./Dashboard";
import {Navigate} from "react-router-dom";

export default function Login(): React.ReactElement {
    const {apiData, setApiData} = useContext(ApiContext) as ApiContextType;

    const redirectToLogin = async () => {
      // const url = 'http://127.0.0.1:8000'
      const url = 'https://ksh.dev'

    // @ts-ignore
        window.location = `https://discord.com/oauth2/authorize?client_id=1053517227783098488&redirect_uri=${url}/callback&response_type=code&scope=identify`

    // TEMPORARY
    fetch(`${url}/load`, {
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
          // console.error("error in api", err)
          alert("Error fetching user info");
      });
  };
    if(apiData){
        return <Navigate to="/dashboard" />
    }
  return (
    <div className="flex justify-center items-center">
      <button className="inline-block w-[20rem] mt-[10rem] px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" onClick={redirectToLogin}>
        Login with Discord
      </button>
    </div>
  );
}
