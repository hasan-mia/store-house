import React from 'react';

const Cart = ({item, removeItem}) => {
	return (
		<>
			<tr className='d-flex' id='item'>
				<td className='float-start'> <img className='img-fluid cart-img' src={item.image} alt="" /> </td>
				<td className='w-100'>{item.title}</td>
				<td>{item.price}</td>
				<td className='float-end'> <button onClick={()=>removeItem(item.id)} className='btn-transparent'><i className="fas fa-trash-alt"></i></button> </td>
			</tr>
			
		</>
	);
};

export default Cart;