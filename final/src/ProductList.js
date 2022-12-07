import Product from "./Product";
import React, {useEffect, useState} from "react";
import ProductView from "./ProductView";
import {IconPlus} from "@tabler/icons";
import {ActionIcon} from "@mantine/core";
import ShoppingCart from "./ShoppingCart";

const ProductList = ({items, setOrder, order}) => {

    const [isList, setIsList] = useState(true)
    const [selectedItem, setSelectedItem] = useState(0)

    const x = items.map((item, key) => ({...item, 'count': 0}))
    const orderItems = x.map((item, key) => (Object.fromEntries(Object.entries(item)
        .filter(([key]) => key === 'name' || key === 'price' || key === 'count'))))

    useEffect(() => {
        setOrder(orderItems)
    }, [])

    console.log(order)
    if (isList) {

        return (

            <div className='item-list'>
                <ShoppingCart order={order} orderItems={orderItems} setOrder={setOrder}/>

                {items.map((product, index) => (
                    <div>
                        <ActionIcon>
                            <IconPlus size={18} variant="outline"
                                      onClick={() => {
                                          console.log(product)
                                          const newList = order.map((item, key) => {
                                              if (key === index) {
                                                  const updatedItem = {
                                                      ...item,
                                                      count: item.count + 1,
                                                  };

                                                  return updatedItem;
                                              }

                                              return item;
                                          });

                                          setOrder(newList);
                                      }}
                            />
                        </ActionIcon>
                        <Product key={index} index={index} setIsList={setIsList} setSelectedItem={setSelectedItem}
                                 name={product.name} price={product.price}
                                 imgUrl={product.imgUrl}/>
                    </div>
                ))}
            </div>
        );
    }
    return (
        <div>
            <button onClick={() => setIsList(true)}>Back</button>
            <ProductView name={items[selectedItem].name} price={items[selectedItem].price}
                         imgUrl={items[selectedItem].imgUrl} store={items[selectedItem].store}
                         imgUrl2={items[selectedItem].imgUrl2}
                         description={items[selectedItem].description}
            />
        </div>
    );

}
export default ProductList;