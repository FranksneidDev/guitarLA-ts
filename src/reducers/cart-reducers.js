import { db } from "../data/db";
const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
};
//State Initial
export const initialState = {
    data: db,
    cart: initialCart()
};
const MAX_ITEMS = 5;
const MIN_ITEMS = 1;
//Reducer Function
export const cartReducer = (state = initialState, action) => {
    if (action.type === "add-to-cart") {
        const itemExists = state.cart.find(guitar => guitar.id === action.payload.item.id);
        let updatedCart = [];
        if (itemExists) { // Si el producto ya está en el carrito
            updatedCart = state.cart.map(item => {
                if (item.id === action.payload.item.id) {
                    if (item.quantity < MAX_ITEMS) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    else {
                        return item;
                    }
                }
                else {
                    return item;
                }
            });
        }
        else { // Si el producto no está en el carrito
            const newItem = { ...action.payload.item, quantity: 1 };
            updatedCart = [...state.cart, newItem]; // Agrega el producto con cantidad 1
        }
        return {
            ...state,
            cart: updatedCart
        };
    }
    if (action.type === "remove-from-cart") {
        const cart = state.cart.filter(item => item.id !== action.payload.id);
        return {
            ...state,
            cart
        };
    }
    if (action.type === "increase-quantity") {
        const cart = state.cart.map(item => {
            if (item.id === action.payload.id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
            }
            return item;
        });
        return {
            ...state,
            cart
        };
    }
    if (action.type === "decrease-quantity") {
        const cart = state.cart.map(item => {
            if (item.id === action.payload.id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1,
                };
            }
            return item;
        });
        return {
            ...state,
            cart
        };
    }
    if (action.type === "clear-cart") {
        return {
            ...state,
            cart: []
        };
    }
    return state;
};
