import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ChoseItem from '../Cart/ChoseItem';
import Product from './Product';
import './Products.css'


const Products = ({addToCart, cart, addToLWishlist, deleteCart, randomItem, random, removeItem, removeChoseItem}) => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		fetch('products.json')
			.then(res => res.json())
			.then(data => setProducts(data))
	}, [])

	let total = 0;
	cart.map(item => 
		{
			total = total + item.price
			return total;
		}
	)
	return (
		<section className='products my-5'>
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-6 col-12">
						<div className="row">
							{ 
								products.map(product =>
								<Product
									key={product.id}
									product={product}
									addToCart={addToCart}
									addToLWishlist={addToLWishlist}
								></Product>)
							}
						</div>
					</div>
					{/* end products */}

					{/* Cart Item */}
					<div className="col-lg-4 col-md-6 col-12" id='cart-section'>
							<div className="row">
								<div className="col-12">
									<table className='table'>
										<thead>
											<tr className='d-flex justify-content-between'>
											<th scope="col" className='float-start'>Image</th>
											<th scope="col">Name</th>
											<th scope="col">Price</th>
											<th scope="col" className='float-end'> <i className="far fa-backspace"></i></th>
											</tr>
										</thead>
										<tbody>
											{
												cart.map(item=> <Cart 
													key={item.id}
													item={item}
													removeItem={removeItem}
													></Cart>)
											}
										</tbody>
										{/* total */}
										<tfoot>
												<th scope="col" className='float-start'>Total</th>
												<th className='float-end pe-5'>${Math.ceil(total)}.00 </th>
										</tfoot>
										
									</table>

									{/* Random & Delete Button*/}
									<div className="d-flex justify-content-between">
										<button onClick={()=>randomItem(cart)} className='btn btn-success fw-bold px-2'>Free One</button>
										<button onClick={()=>deleteCart(cart)} className='btn btn-danger fw-bold px-2'>Chose Again</button>
									</div>

									{/* Chose Random Product */}
									{random.id? 
									<table className="table my-3">
										<ChoseItem 
										random={random}
										removeChoseItem={removeChoseItem}
										total={total}
										></ChoseItem>
									</table>
									: null
									}

								</div>
							</div>
					</div>
					{/* end cart */}
				</div>
			</div>
		</section>
	);
};

export default Products;