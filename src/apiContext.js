import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [productoElegido, setProductoElegido] = useState([]);



  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("https://dummyjson.com/products");
      setProductos(data.products);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const buscarCategorias = async () => {
      const response = await axios.get(
        `https://dummyjson.com/products/categories`
      ); // acá hacemos la consulta de axios a la API
      setCategorias(response.data);
    };
    buscarCategorias();
  }, []);

  return (
    <APIContext.Provider
      value={{
        productos,
        categorias,
        productoElegido
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
