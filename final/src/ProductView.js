import React from "react";
import Product from "./Product";

const ProductView = (prop: { name: string, price: number, imageUrl: string , store:string, pic2:string, description:string}) => {
    return (
        <div className={"item-container"}>
            <Product name={prop.name} price={prop.price} imageUrl={prop.imageUrl}/>
            <Product name={prop.store} price={prop.description} imageUrl={prop.pic2}/>

        </div>
    );
}
export default ProductView;