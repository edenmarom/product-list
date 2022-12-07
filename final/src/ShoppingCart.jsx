import React from 'react';
import {IconShoppingCart} from "@tabler/icons";
import {Popover, ActionIcon, Text, Title, Button, Alert} from "@mantine/core";
import axios from "axios";

const ShoppingCart = ({order, setOrder, orderItems}) => {
    return (
        <div>
            <Popover width={200} position="bottom" withArrow shadow="md">
                <Popover.Target>
                    <ActionIcon variant='outline'>
                        <IconShoppingCart size={18}/>
                    </ActionIcon>
                </Popover.Target>
                <Popover.Dropdown>
                    {order?.map((item) =>
                        (<div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <Title order={4}>{item.name}</Title>
                                <Text>{item.price}</Text>
                                <Text>{item.count}</Text>

                            </div>

                        ))
                    }

                    <Button onClick={() => {
                        axios.post("http://localhost:3000/new-order", order)
                        alert('Tx for ur order!')
                        setOrder(orderItems)
                    }}>Buy Now !</Button>
                </Popover.Dropdown>
            </Popover>

        </div>
    )
}

export default ShoppingCart