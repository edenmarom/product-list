import React, {useState} from 'react';
import './index.css';
import serum from './assets/serum.jpg';
import cream from './assets/cream.jpg';
import water from './assets/water.jpg';
import serum2 from './assets/serum2.jpg';
import cream2 from './assets/cream2.jpg';
import water2 from './assets/water2.jpg';
import ProductList from "./ProductList";

const App = () => {
    const [items] = useState([
        {name: 'Anti Aging Serum', price: 256, imageUrl: serum , store:'Clinic', imageUrl2: serum2, description:'Makes you younger'},
        {name: 'Face Cream', price: 50, imageUrl: cream ,store:'Super Pharm', imageUrl2: cream2, description:'Makes you beautiful'},
        {name: 'Micellar Water', price: 30, imageUrl: water ,store:'Be Super Pharm', imageUrl2: water2, description:'Makes you hydrated'}
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
