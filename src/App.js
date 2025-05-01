import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Header from "./components/Header";
import Guitar from "./components/Guitar";
import { cartReducer, initialState } from "./reducers/cart-reducers";
import { useEffect, useReducer } from "react";
export default function App() {
    //Custom hook con logic
    const [state, dispatch] = useReducer(cartReducer, initialState);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }, [state.cart]);
    return (_jsxs(_Fragment, { children: [_jsx(Header, { cart: state.cart, dispatch: dispatch }), _jsxs("main", { className: "container-xl mt-5", children: [_jsx("h2", { className: "text-center", children: "Nuestra Colecci\u00F3n" }), _jsx("div", { className: "row mt-5", children: state.data.map((guitar) => (_jsx(Guitar, { guitar: guitar, dispatch: dispatch }, guitar.id))) })] }), _jsx("footer", { className: "bg-dark mt-5 py-5", children: _jsx("div", { className: "container-xl", children: _jsx("p", { className: "text-white text-center fs-4 mt-4 m-md-0", children: "GuitarLA - Todos los derechos Reservados" }) }) })] }));
}
