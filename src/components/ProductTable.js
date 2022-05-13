import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, selectProduct } from '../features/product/productSlice';

const ProductTable = () => {

    const products = useSelector(selectProduct);
    const dispatch = useDispatch()
    console.log('product table-->', products);

    return (
        <>
            <table className='w-4/5 text-center mt-20 mx-auto'>
                <tbody className=''>
                <tr className='h-16 border-y-2'>
                        <th className=''></th>
                        <th className='text-2xl font-black underline'>Name</th>
                        <th className='text-2xl font-black underline'>Description</th>
                        <th className='text-2xl font-black underline'>Price</th>
                        <th className=''></th>
                    </tr>

                    {
                        products.length > 0 ? products.map((product) => {
                            console.log("each product:-",product);
                            return (
                                
                                    <tr className='h-16 border-b-2' key={product.id}>
                                        <td className=''>
                                            <img width={60} src={product.image} />
                                        </td>
                                        <td className=''>{product.name}</td>
                                        <td className=''>{product.description}</td>
                                        <td className=''>₹{product.price}</td>
                                        <td className=''>
                                            <button onClick={()=>{dispatch(deleteProduct(product.id))}} className='flex flex-row items-center justify-center font-semibold' type='button'>
                                                <span className='text-sky-500'>Remove   </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-trash3-fill h-4 w-4" viewBox="0 0 16 16">
                                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                
                            )
                        }):
                        <h2>Add Product to see Product Table</h2>
                    }
                </tbody>
            </table>
        </>
    )
}

export default ProductTable;