import React, {useEffect, useState} from 'react';
import './index.css';
import ProductList from "./ProductList";
import axios from "axios";
import {
    useQuery,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import ShoppingCart from "./ShoppingCart";
import {MantineProvider} from "@mantine/core";

const queryClient = new QueryClient();

const App = () => {
    return (
        <div className="app-background">
            <MantineProvider withGlobalStyles withNormalizeCSS>

                <QueryClientProvider client={queryClient}>
                    <GetProducts/>
                </QueryClientProvider>
            </MantineProvider>
        </div>
    );
}

function GetProducts() {
    const [order, setOrder] = useState()


    const {isLoading, error, data, isFetching} = useQuery(["repoData"], () =>
        axios.get("http://localhost:3000/getAllProducts")
            .then((res) => {
                return res.data;
            })
    );

    if (isLoading)
        return "Loading...";

    if (error)
        return "An error has occurred: " + error.message;

    return (
        <div>
            <div className="main-container">

                <ProductList items={data} setOrder={setOrder} order={order}/>
            </div>
        </div>
    );
}

export default App;
