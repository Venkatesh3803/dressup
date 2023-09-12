import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';



const initialState = {
    products: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    quantity: localStorage.getItem("qty") ? JSON.parse(localStorage.getItem("qty")) :  0,
    total:  localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total")) : 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addToCart: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price;

            toast.success(`added to cart`, { position: "bottom-center" })

            localStorage.setItem("cart", JSON.stringify(state.products))
            localStorage.setItem("total", JSON.stringify(state.total))
            localStorage.setItem("qty", JSON.stringify(state.quantity))
        },
        clearCart: (state) => {
            state.quantity = 0;
            state.products = [];
            state.total += 0;
            localStorage.removeItem("cart")
            localStorage.removeItem("total")
            localStorage.removeItem("qty")
        },


        removeProduct: (state, action) => {
            state.products = state.products.filter((id) => action.payload.id !== id)
        },
    }
})

// Action creators are generated for each case reducer function
export const { addToCart, clearCart, removeProduct } = cartSlice.actions

export default cartSlice.reducer