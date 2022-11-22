import React from "react";

const Product = (product: { name: string, price: number, imageUrl: string, setIsList: boolean, index:number}) => {

    const replaceView = () => {
    product.setIsList(false)
    product.setSelectedItem(product.index)
    }

    return (
        <div className={"item-container"} onClick={replaceView} >
            <div className='item-name'>
                <span>{product.name}</span>
            </div>
            <div className='item-price'>
                <div>{product.price}</div>
            </div>
            <div className='item-img'>
                <img className='img' src={product.imageUrl} alt="HTML5 Icon"></img>
            </div>
        </div>
    );
}
export default Product;