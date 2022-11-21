import Product from "./Product";
import React from "react";

const ProductList = (prop: { items: {} }) => {
    return (
        <div className='item-list'>
            {prop.items.map((item, index) => (
                <Product name={item.name} price={item.price} imageUrl={item.imageUrl}/>
            ))}
        </div>);
}
export default ProductList;