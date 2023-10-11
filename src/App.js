import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Busqueda from "./Busqueda";
import Detalle from "./Detalle";
import Layout from "./Layout"
import './App.css';
import { APIContextProvider } from "./apiContext";



function App() {
  return (
    <APIContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/detalle/:id" element={<Detalle />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/busqueda" element={<Busqueda />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter >
    </APIContextProvider>
  );
}

export default App;