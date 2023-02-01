import React, {ReactElement, useContext, useEffect} from "react";
import Sidenav from "./Sidenav";
import MonitorContainer from "./MonitorContainer";
import {ApiContext, ApiContextType} from "../../contexts/ApiContext";
import {Navigate } from "react-router-dom";
import StoreList from "../StoreList";
import Header from "../Header";

export default function Dashboard2(): ReactElement {
  const {apiData} = useContext(ApiContext) as ApiContextType;

  // if(!apiData) {
  //   return <Navigate to="/login" />
  // }
  return (
    <div className="App min-h-screen bg-[#141E21]">
      <div className="relative sidenav" data-dev-hint="container">
        <main
          id="content"
          className="flex-1 p-6 max-[805px]:p-2 xl:px-8 max-[805px]:px-0s bg-[#141E21] mx-auto"
        >
          <div className="h-[100%] monitor-container overflow-hidden mt-12 flex flex-col justify-center items-center  gap-7  ">
            <div className="w-[20rem] ">
              <Header/>
              <StoreList/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
