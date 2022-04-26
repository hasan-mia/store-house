import React from 'react';

const Product = ({addToCart, product, addToLWishlist}) => {
	const {title, image, description, price, rating} = product
	
	return (
		<div className='col-lg-4 col-md-6 col-12'>
			<div className="card py-0 mb-3">
				<img src={image} className="card-img-top p-1" alt=""/>
					<div className="card-body">
						<h2 className="card-title fw-bold fs-6">{title}</h2>
						<div className="d-flex justify-content-between mt-1">
							<p className="card-text fs-5 fw-bold">${price} </p>
							<p className="card-text fs-5 text-warning"> {rating.rate} <i className="fas fa-star"></i></p>
						</div>
					</div>
					<div className="card-description">
						<p className="card-text text-justify fs-6">{description.slice(0,80)} </p>
					</div>
					<div className="card-footer d-flex justify-content-between">
						<button onClick={()=>addToLWishlist(product.id)} className="btn btn-custom text-uppercase text-white fw-bold"> <i className="fas fa-heartbeat mx-1"></i> </button>
						<button onClick={()=>addToCart(product)} className="btn btn-custom text-uppercase text-white"> <i className="fas fa-cart-arrow-down fa-x"></i> </button>
					</div>
			</div>
		</div>
	);
};

export default Product;