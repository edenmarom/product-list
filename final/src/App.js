import React, {useState} from 'react';
import './index.css';
import serum from './assets/serum.jpg';
import cream from './assets/cream.jpg';
import water from './assets/water.jpg';
import ProductList from "./ProductList";

const App = () => {
    const [items] = useState([
        {name: 'Anti Aging Serum', price: 256, imageUrl: serum , store:'clinic', pic2:'', description:'Makes you younger'},
        {name: 'Face Cream', price: 50, imageUrl: cream ,store:'Deli Cream', pic2:'', description:'Makes you beautiful'},
        {name: 'Micellar Water', price: 30, imageUrl: water ,store:'Yamit 2000', pic2:'', description:'Makes you hydrated'}
    ]);

    return (
        <div className='app-background'>
            <div className='main-container'>
                <ProductList items={items}/>
            </div>
        </div>
    );
}

export default App;
