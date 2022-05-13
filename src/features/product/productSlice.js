import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            // to add product
            console.log('Add Product action called', action, state);
            state.products.push(action.payload);
            // console.log('action.payload logged-->', state.value);
        },

        updateProduct: (state) => {
            // to edit/ update product
        },

        deleteProduct: (state,action) => {
            console.log("delete product action called!!",action);
            // to remove/ delete product
            state.products = state.products.filter(product => product.id != action.payload)
        },
    }
})

// we are doing named-export of the actions
export const { addProduct, updateProduct, deleteProduct, getProduct } = productSlice.actions;

export const selectProduct = (state) => state.product.products;

export default productSlice.reducer;