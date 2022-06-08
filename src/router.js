import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
//import Home from '././components/Home/Home';
//import Login from '././components/Login/Login';
//import Signup from '././components/Signup/Signup';
import NotFound from "./components/NotFound/NotFound";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Welcome />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
