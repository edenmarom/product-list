import React from 'react';
import {IconShoppingCart} from "@tabler/icons";
import {Popover, ActionIcon, Text, Title, Button, Alert} from "@mantine/core";
import axios from "axios";
import {IconPlus} from "@tabler/icons";

const ShoppingCart = ({order, setOrder, orderItems}) => {
    return (
        <div>
            <Popover width={250} position="bottom" withArrow shadow="md">
                <Popover.Target>
                    <ActionIcon variant='outline'>
                        <IconShoppingCart size={18}/>
                    </ActionIcon>
                </Popover.Target>
                <Popover.Dropdown>
                    <Title className='cartHeader'>Shopping Cart:</Title>
                    <div className='cartCol'>
                        <Text>Product</Text>
                        <Text>Price</Text>
                        <Text>Count</Text>
                        <Text>Add</Text>
                    </div>
                    <div className='cartProductsDisplay'>
                        {order?.map((item, index) =>
                            (<div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <Text order={4}>{item.name}</Text>
                                    <Text>{item.price}</Text>
                                    <Text>{item.count}</Text>
                                    <ActionIcon>
                                            <IconPlus size={18} variant="outline" displayName="Add To Cart"
                                            onClick={addProduct(item, order, index, setOrder)}/>
                                    </ActionIcon>
                                </div>
                            ))
                        }
                    </div>
                    <div className='totalSection'>
                        <Title className='totalHeader'>
                            Total Amount:
                        </Title>
                        <Text className='total'>
                            {order?.reduce((a,item) =>  a = a + (item.price * item.count) , 0 )}
                        </Text>
                    </div>
                    <Button onClick={() => { sendOrder(order, setOrder, orderItems);}}>Buy Now !</Button>
                </Popover.Dropdown>
            </Popover>
        </div>
    )
}

export default ShoppingCart

const sendOrder = (order, setOrder, orderItems) => {
    console.log(order);
    axios.post("http://localhost:3000/newOrder", order);
    alert('Tx for ur order!');
    setOrder(orderItems);
}

const addProduct = (product, order, index, setOrder) => {
    return () => {
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
    };
}
