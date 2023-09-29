import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Busqueda from "./Busqueda";
import Detalle from "./Detalle";
import Layout from "./Layout"
import './App.css';
import { MyContext } from "./MyContext.js";
import { useState } from "react";



function App() {
  return (
    <MyContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/detalle/:detalleId" element={<Detalle />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/busqueda" element={<Busqueda />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter >
    </MyContext.Provider>
  );
}

export default App;