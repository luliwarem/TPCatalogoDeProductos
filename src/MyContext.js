import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const MyContext = createContext("");

const ObtenerProductos = ({ children }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function getProductos() {
      const response = await axios
        .get(`https://dummyjson.com/products`)
        .then((response) => response.json())
        .then((response) => setProductos(response));
    }
    getProductos();
  }, []);

  return (
    <MyContext.Provider
      value={{
        productos,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export function Contexto() {
  const context = useContext(ObtenerProductos);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
