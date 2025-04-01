import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Header from "./components/Header";
import Guitar from "./components/Guitar";
import { useCart } from "./hooks/useCart";
export default function App() {
    //Custom hook con logic
    const { data, cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cleanCart, isEmpty, cartTotal } = useCart();
    return (_jsxs(_Fragment, { children: [_jsx(Header, { cart: cart, removeFromCart: removeFromCart, increaseQuantity: increaseQuantity, decreaseQuantity: decreaseQuantity, cleanCart: cleanCart, isEmpty: isEmpty, cartTotal: cartTotal }), _jsxs("main", { className: "container-xl mt-5", children: [_jsx("h2", { className: "text-center", children: "Nuestra Colecci\u00F3n" }), _jsx("div", { className: "row mt-5", children: data.map((guitar) => (_jsx(Guitar, { guitar: guitar, addToCart: addToCart }, guitar.id))) })] }), _jsx("footer", { className: "bg-dark mt-5 py-5", children: _jsx("div", { className: "container-xl", children: _jsx("p", { className: "text-white text-center fs-4 mt-4 m-md-0", children: "GuitarLA - Todos los derechos Reservados" }) }) })] }));
}
