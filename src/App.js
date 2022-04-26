import {Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Productcs/Products';
import Question from "./components/Pages/Question";
import { useState } from 'react';

function App() {
	//Add to Cart Handler
	const [cart, setCart]=useState([])

	//  Handle Add To Cart Product
	const addToCart =(product)=>{
		let updateCart = [];	
		if (cart.length < 4) {
			updateCart = [...cart, product]
			setCart(updateCart);
		}
		else{
			alert('you cant add')
		}
	}
	
	// Remove Single Item From Cart
	const removeItem = (id) => {
		const newList = cart.filter((item) => item.id !== id);
		setCart(newList);
	}
	
	// Select Random Product From Cart
	const [random, setRandom] = useState({})
	const randomItem = (cart) => {
		if (cart.length !== 0) {
			let selected = cart[Math.floor(Math.random() * cart.length)]
			setRandom(selected);
		} else {
			alert('no data')
		}
		
	}

	// Remove Single Item From Cart
	const removeChoseItem = (id) => {
		const newList = cart.filter((item) => item.id !== id);
		setRandom(newList);
	}

	// Remove All Item From Cart
	const deleteCart = (cart) => {
		cart = []
		setCart(cart);
		setRandom(cart);
	}

	//Add to wishlist Handler
	const [wishlist, setWishlist] = useState([])
	const addToLWishlist = (productId) => {
		let updateWishlist = [];
		updateWishlist = [...wishlist, productId]
		setWishlist(updateWishlist);
	}

	return(
		<>
			{/* =========Header======= */}
			<Header cart={cart} wishlist={wishlist}></Header>
				<Routes>
					< Route path = "/"
						element={
							<Products 
								addToCart={addToCart}
								cart={cart}
								addToLWishlist={addToLWishlist}
								wishlist={wishlist}
								removeItem={removeItem}
								deleteCart={deleteCart}
								randomItem={randomItem}
								random={random}
								removeChoseItem={removeChoseItem}
							></Products>
						}>						
					</Route>
					<Route path ="/question" element={<Question></Question>}></Route>
				</Routes>
			{/* =========Footer======= */}
			<Footer></Footer>
		</>
	)
}

export default App;
