import React from "react";
import Product from "./Product";

const ProductView = (detailedProduct: { name: string, price: number, imgUrl: string , store:string, imgUrl2:string, description:string}) => {
    return (
        <div className={"item-details"}>
            <Product name={detailedProduct.name} price={detailedProduct.price} imgUrl={detailedProduct.imgUrl}/>
            <div className="details">More details:</div>
            <Product name={detailedProduct.store} price={detailedProduct.description} imgUrl={detailedProduct.imgUrl2}/>
        </div>
    );
}
export default ProductView;