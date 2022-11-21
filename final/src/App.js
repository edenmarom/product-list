import React, {useState} from 'react';
import './index.css';
import serum from './assets/serum.jpg';
import cream from './assets/cream.jpg';
import water from './assets/water.jpg';
import ProductList from "./ProductList";

const App = () => {
    const [items] = useState([
        {name: 'Anti Aging Serum', price: 256, imageUrl: serum},
        {name: 'Face Cram', price: 50, imageUrl: cream},
        {name: 'Micelar Water', price: 30, imageUrl: water}
    ]);

    return (
        <div className='app-background'>
            <div className='main-container'>
                <ProductList items={items}/>
            </div>
        </div>
    );
};

export default App;
