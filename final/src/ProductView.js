import React from "react";
import Product from "./Product";

const ProductView = (detailedProduct: { name: string, price: number, imageUrl: string , store:string, imageUrl2:string, description:string}) => {
    return (
        <div className={"item-details"}>
            <Product name={detailedProduct.name} price={detailedProduct.price} imageUrl={detailedProduct.imageUrl}/>
            <div className="details">More details:</div>
            <Product name={detailedProduct.store} price={detailedProduct.description} imageUrl={detailedProduct.imageUrl2}/>
        </div>
    );
}
export default ProductView;