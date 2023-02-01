import React, {ReactElement, useContext, useEffect} from "react";
import Sidenav from "./Sidenav";
import MonitorContainer from "./MonitorContainer";
import {ApiContext, ApiContextType} from "../../contexts/ApiContext";
import {Navigate } from "react-router-dom";

export default function Dashboard(): ReactElement {
  const {apiData} = useContext(ApiContext) as ApiContextType;

  if(!apiData) {
    return <Navigate to="/login" />
  }
  return (
    <div className="App min-h-screen bg-[#141E21]">
      <div className="relative sidenav xl:flex" data-dev-hint="container">
        <Sidenav />
        <main
          id="content"
          className="flex-1 p-6 max-[805px]:p-2 xl:px-8 max-[805px]:px-0s mx-auto bg-[#141E21]"
        >
          <div className="">
            <div className="px-4 py-6 sm:px-0">
              <div className=" monitor-container overflow-hidden mt-12 flex flex-col  gap-7  ">
                {apiData && apiData.length > 1 && apiData.clients.map((clientData: any, clientIndex: number): React.ReactElement => {
                  return (
                    <MonitorContainer
                      apiData={apiData}
                      clientData={clientData}
                      clientIndex={clientIndex}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
