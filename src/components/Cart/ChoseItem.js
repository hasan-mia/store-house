import React from 'react';

const ChoseItem = ({random, removeChoseItem, total}) => {
	let subTotal = 0;
	subTotal = total - random.price
	return (
		<>
		<tbody>
			<tr className='d-flex' id='item'>
				<td className='float-start'> <img className='img-fluid cart-img' src={random.image} alt="" /> </td>
				<td className='w-100'>{random.title}</td>
				<td>{random.price}</td>
				<td className='float-end'> <button onClick={()=>removeChoseItem(random.id)} className='btn-transparent'><i className="fas fa-trash-alt"></i></button> </td>
			</tr>
		</tbody>
		{/* Sub-Total */}
		<tfoot>
			<tr className='d-flex justify-content-between'>
				<th scope="col" className='float-start'>Sub-Total</th>
				<th className='float-end pe-5'>$ {Math.ceil(subTotal)}.00</th>
			</tr>
		</tfoot>
		</>
		
	);
};

export default ChoseItem;