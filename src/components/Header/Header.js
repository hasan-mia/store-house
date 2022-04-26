import React from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './Header.css'
const Header = ({cart, wishlist}) => {
	return (
		<Navbar className='bg-custom' fixed='top' expand="lg">
			<Container>
				<Navbar.Brand href="/" className='text-white fs-4 fw-bold text-uppercase'>Store-House</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" className="fas fa-bars"/>
				<Navbar.Collapse id="navbarScroll">
				<Nav className="me-auto pe-3 my-2 my-lg-0">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/question">Question</Nav.Link>
				</Nav>
				<Form className="d-flex w-75">
					<FormControl
					type="search"
					placeholder="Search"
					className="me-2"
					aria-label="Search"
					/>
					<Button variant="outline-warning"> <i className="fa fa-search"></i> </Button>
				</Form>
				<Nav className="ms-auto ps-3 my-2 my-lg-0">
					<button className='btn-transparent'> <i className="fas fa-heartbeat mx-1"></i> 
					<span className="position-absolute badge rounded-pill fs-6"> {wishlist.length} </span>

					</button>
					<button className='btn-transparent'> < i className = "fas fa-cart-arrow-down ps-3" > </i> 
						<span className="position-absolute badge rounded-pill fs-6"> {cart.length} </span>
					 </button>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;