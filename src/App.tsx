import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Loading from "./components/loading/Loading";
import Main from "./components/main/Main";
import Start from "./components/start/Start";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
      </Route>
      <Route path='/loading' element={<Loading />}>
      </Route>
      <Route path='/start' element={<Start />}/>
    </Routes>
  );
}

export default App;
