import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../features/product/productSlice';

const ProductCard = () => {

  const products = useSelector(selectProduct);
  const dispatch = useDispatch()

  return (
    <>
      <div className='flex flex-wrap items-center justify-center'>
        {
          products.length > 0 ? products.map((product) => {
            return (
              <>
                <div className='border-2 rounded-3xl m-5 border-black h-96 w-96 flex flex-col items-center justify-center'>
                  <img className='h-72 w-full object-cover overflow-hidden rounded-3xl' src={product.image} />
                  <div className='h-24 flex flex-row items-center space-x-10'>
                    <div className='text-2xl font-black'>
                      {product.name}
                    </div>
                    <div className='text-2xl font-black'>
                      ₹{product.price}
                    </div>
                  </div>
                </div>
              </>
            )
          }) :
            <h2 className='font-black text-xl m-5'>Loading... Added Products in the "Product Management" form will Appear Here!</h2>
        }
      </div>
    </>
  )
}


export default ProductCard;





