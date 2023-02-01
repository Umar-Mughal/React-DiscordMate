import {FC, useContext, useEffect, useState} from "react";
import Dashboard from "./components/KashMonitors/Dashboard";
import {ApiContext, ApiContextType} from "./contexts/ApiContext";
import Login from "./components/KashMonitors/Login";

const App: FC = (): JSX.Element => {
  const {apiData} = useContext(ApiContext) as ApiContextType;
  return <div></div>
};

export default App;
