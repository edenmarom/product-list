import Product from "./Product";
import React, {useState} from "react";
import ProductView from "./ProductView";

const ProductList = (productList: { items: {} }) => {

    const [isList, setIsList] = useState(true)
    const [selectedItem, setSelectedItem] = useState(0)
    if (isList) {

        return (
            <div className='item-list'>
                {productList.items.map((product, index) => (
                    <Product key={index} index={index} setIsList={setIsList} setSelectedItem={setSelectedItem}
                             name={product.name} price={product.price}
                             imgUrl={product.imgUrl}/>
                ))}
            </div>
        );
    }
    return (
        <div>
            <button onClick={() => setIsList(true)}>Back</button>
            <ProductView name={productList.items[selectedItem].name} price={productList.items[selectedItem].price}
                         imgUrl={productList.items[selectedItem].imgUrl} store={productList.items[selectedItem].store}
                         imgUrl2={productList.items[selectedItem].imgUrl2} description={productList.items[selectedItem].description}
            />
        </div>
    );

}
export default ProductList;