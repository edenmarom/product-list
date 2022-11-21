import Product from "./Product";
import React, {useState} from "react";
import ProductView from "./ProductView";

const ProductList = (prop: { items: {} }) => {
    const [isList, setIsList] = useState(true)
    const [selectedItem, setSelectedItem] = useState(0)
    if (isList) {

        return (
            <div className='item-list'>
                {prop.items.map((item, index) => (
                    <Product key={index} index={index} setIsList={setIsList} setSelectedItem={setSelectedItem}
                             name={item.name} price={item.price}
                             imageUrl={item.imageUrl}/>
                ))}
            </div>


        );
    }
    return (
        <div>
            <button onClick={() => setIsList(true)}>Back</button>
            <ProductView name={prop.items[selectedItem].name} price={prop.items[selectedItem].price}
                         imageUrl={prop.items[selectedItem].imageUrl} store={prop.items[selectedItem].store}
                         pic2={prop.items[selectedItem].pic2} description={prop.items[selectedItem].description}
            />)
        </div>
    );

}
export default ProductList;