import React, {useState} from 'react';
import './index.css';
import ProductList from "./ProductList";
import axios from "axios";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {

    return (
      <div className="app-background">
        <QueryClientProvider client={queryClient}>
          <GetProducts />
        </QueryClientProvider>
      </div>
    );
}

function GetProducts() {
  const { isLoading, error, data, isFetching } = useQuery(["repoData"], () =>
    axios.get("http://localhost:3000/getAllProducts").then((res) => {
      return res.data;
    })
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <div className="main-container">
        <ProductList items={data} />
      </div>
    </div>
  );
}

export default App;
