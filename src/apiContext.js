import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("https://dummyjson.com/products");
      console.log(data.products);
      setProductos(data.products);
    }
    fetchData();
  }, []);
  return (
    <APIContext.Provider
      value={{
        productos
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
