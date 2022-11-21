import React, { useState } from 'react';
import './index.css';
import serum from './assets/serum.jpg'; 
import cream from './assets/cream.jpg'; 
import water from './assets/water.jpg'; 

const App = () => {
	const [items] = useState([
		{ name: 'Anti Aging Serum', price: 256, imageUrl: serum },
		{ name: 'Face Cram', price: 50, imageUrl: cream },
		{ name: 'Micelar Water', price: 30, imageUrl: water }
	]);
	
	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='item-list'>
					{items.map((item, index) => (
						<div className='item-container'>
							<div className='item-name'>
								<span>{item.name}</span>
							</div>
							<div className='item-price'>
								<div>{item.price}</div>
							</div>
							<div className='item-img'>
								<img className='img' src={item.imageUrl} alt="HTML5 Icon"></img>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default App;
