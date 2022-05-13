import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, selectProduct } from '../features/product/productSlice';
import { convertToBase64 } from '../utils';

const AddProduct = () => {
    const [disabled, setDisabled] = useState(false)
    const [addProductItem, setAddProductItem] = useState({
        name: '',
        description: '',
        price: '',
        image: ''
    })
    const [error, setErrors] = useState({
        name: false,
        price: false,
        description: false,
        image: false
    })

    const product = useSelector(selectProduct);
    // console.log('useSelector logged-->', product);
    const dispatch = useDispatch();



    const onChange = (e) => {
        console.log("onchange called!!!");
        setErrors({
            ...error,
            [e.target.name]: e.target.value ? false : true
        })
        setAddProductItem(
            {
                ...addProductItem, [e.target.name]: e.target.value
            }
        )
    }

    const addProductHandler = (e) => {
        // console.log("Add product hanler called:-",Boolean(addProductItem.name),);

        setErrors({
            name: Boolean(!addProductItem.name),
            price: Boolean(!addProductItem.price),
            description: Boolean(!addProductItem.description),
            image: Boolean(!addProductItem.image),
        })

        if (addProductItem.name && addProductItem.price && addProductItem.description && addProductItem.image) {
            dispatch(addProduct({ ...addProductItem, id: uuidv4() }))
            // setAddProductItem({
            //     name: '',
            //     description: '',
            //     price: '',
            //     image: ''
            // })
        }
    }

    const handleOnBlur = (e) => {
        console.log("handleOnBlur called!!!");
        setErrors({
            ...error,
            [e.target.name] : !e.target.value ? true : false
        })
    }


    const handleImageChange = async (event) => {

        const file = event.target.files[0]
        const base64 = await convertToBase64(file)
        setAddProductItem({
            ...addProductItem,
            image: base64
        })
        if(file){
            setErrors({
                ...error,
                image:false
            })
        }
        // console.log(base64)
    }
  





    return (
        <>
            <div className='flex flex-col items-center justify-center mx-auto rounded-3xl border-2 bg-white border-gray-300 shadow-xl p-5 h-auto w-3/5 text-black'>
                <h1 className='font-bold text-2xl'>
                    Please Fill this Form to Add your Products!
                </h1>
                <div className='flex flex-row items-center justify-center'>
                    <div>
                        <input className='w-96 h-12 pl-2 rounded-lg border-2 border-gray-300 m-5' type='text' id='name' placeholder='Enter Product Name...'
                            required
                            name='name'
                            value={addProductItem.name}
                            onChange={onChange}
                            onBlur={handleOnBlur}
                        />
                        {error.name && <p className='text-red-500'>This Field is Required*</p>}
                    </div>

                    <div>
                        <input  className='w-96 h-12 pl-2 rounded-lg border-2 border-gray-300 m-5' type='number' id='price' placeholder='Enter Price...'
                            required
                            name='price'
                            value={addProductItem.price}
                            onChange={onChange}
                            onBlur={handleOnBlur}
                        />
                        {error.price && <p className='text-red-500'>This Field is Required*</p>}
                    </div>

                </div>

                <div className='flex flex-row items-center justify-center'>
                    <div>
                        <input className='w-96 h-12 pl-2 rounded-lg border-2 border-gray-300 m-5' type='text' id='description' placeholder='Enter Description...'
                            required
                            name='description'
                            value={addProductItem.description}
                            onChange={onChange}
                            onBlur={handleOnBlur}
                        />
                        {error.description && <p className='text-red-500'>This Field is Required*</p>}
                    </div>
                    <div>
                        <input name='image' onChange={handleImageChange}  className='w-96 h-12 p-2 rounded-lg border-2 border-gray-300 m-5 text-justify items-center' type='file' id='image' placeholder='Choose File...' />
                        {error.image && <p className='text-red-500'>This Field is Required*</p>}

                    </div>
                </div>

                <button className='font-semibold h-12 p-2 border-2 rounded-lg text-xl bg-sky-500 hover:bg-sky-600' type='button'
                    // disabled={error.name || error.description || error.price || error.image}
                    onClick={addProductHandler}
                >
                    Add Product
                </button>
                {/* <h1 className='text-red-500'>Please Fill All The Details</h1> */}
            </div>
        </>
    )
}

export default AddProduct;