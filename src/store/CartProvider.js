import CartContext from "./cart-context";

const CartProvider = (props) => {

    const addItemHandler = item => {
        cartContext.items.push(item)
    }

    const removeItemHandler = id => {
        cartContext.items.filter(el => el.id !== id)
    }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemHandler ,
        removeItem: removeItemHandler
    }

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
