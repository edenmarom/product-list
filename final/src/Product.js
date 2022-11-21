import React from "react";


const Product = (prop: { name: string, price: number, imageUrl: string }) => {
    const replaceView=()=>{console.log("heyyyy")}

    return (
        <div className={"item-container"}>
            <div className='item-name'>
                <span>{prop.name}</span>
            </div>
            <div className='item-price'>
                <div>{prop.price}</div>
            </div>
            <div className='item-img'>
                <img onClick={replaceView} className='img' src={prop.imageUrl} alt="HTML5 Icon"></img>
            </div>
        </div>
    );
}
export default Product;