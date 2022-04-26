import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import './Pages.css'
const Question = () => {
	return (
		<section className="pages">
        	<Container>
				<div className="text-center bg-dark text-white text-uppercase py-1 fw-bold">
					<h3>Answer to the Question</h3>
				</div>
				<Accordion>
					<Accordion.Item eventKey="0">
						<Accordion.Header>How React Works?</Accordion.Header>
						<Accordion.Body>
							<p>A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page.</p>
							<p>React is a JavaScript library not a framework that creates user interfaces in a predictable and efficient way using declarative code. It helps to build single-page applications.</p>
							<p>React maintains a tree for and it will do efficient diff computations on the nodes. HTML code is pretty much a tree, or at least that’s how the browser treats it. It constructs what is called the Document Object Model as it’s often referred to.</p>
							<p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.</p>
							<p>On the other hand state is a JavaScript object that represents a part of a component. It changes whenever a user interacts with the application, rendering a new UI to reflect the modifications. State management refers to the practice of managing React application states. It includes storing data in third-party state management libraries and triggering the re-rendering process each time data is changed.</p>
						</Accordion.Body>
					</Accordion.Item>

					<Accordion.Item eventKey="1">
						<Accordion.Header className='text-center'>Props vs State</Accordion.Header>
						<Accordion.Body>
							<p>React state is an object and props are variables that passed to it by its parent component.
							State can be private or public to it’ s children components and may hold information that influences the output of a React component.</p>
							<p>Props do not have to just be data. Callback functions may be passed in as props.</p>
							<p>On the other hand, the state can be initialized by props. Props are read only and Immutable where State is Mutable and asynchronous.</p>
							So Props and can not be modified and State can be modified by using setState.
						</Accordion.Body>
					</Accordion.Item>
					
				</Accordion>
			</Container>
        </section>
	);
};

export default Question;