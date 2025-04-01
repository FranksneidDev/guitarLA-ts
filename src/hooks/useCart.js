import { useEffect, useMemo, useState } from "react";
import { db } from "../data/db";
export function useCart() {
    const initialCart = () => {
        const localStorageCart = localStorage.getItem("cart");
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    };
    const [data] = useState(db);
    const [cart, setCart] = useState(initialCart);
    const MAX_ITEMS = 5;
    const MIN_ITEMS = 1;
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    //Funcion para agregar al carrito
    function addToCart(item) {
        const itemExists = cart.findIndex(guitar => guitar.id === item.id);
        if (itemExists >= 0) { // Si el producto ya está en el carrito
            if (cart[itemExists].quantity >= MAX_ITEMS)
                return;
            const updatedCart = [...cart]; // Copia el carrito actual
            updatedCart[itemExists].quantity++; // Incrementa la cantidad
            setCart(updatedCart); // Actualiza el estado
        }
        else { // Si el producto no está en el carrito
            const newItem = { ...item, quantity: 1 };
            setCart([...cart, newItem]); // Agrega el producto con cantidad 1
        }
    }
    //Function delete guitar from cart
    function removeFromCart(id) {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id));
    }
    //Function increase quantity
    function increaseQuantity(id) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
            }
            return item;
        });
        setCart(updatedCart);
    }
    //Function decrease quantity
    function decreaseQuantity(id) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1,
                };
            }
            return item;
        });
        setCart(updatedCart);
    }
    //Function for empty cart
    function cleanCart() {
        setCart([]);
    }
    const isEmpty = useMemo(() => cart.length === 0, [cart]);
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart]);
    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cleanCart,
        isEmpty,
        cartTotal
    };
}
