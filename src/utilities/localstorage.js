const getCartFromLS = () => {
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);

}

const addItemTOCartLS = id => {
    const cart = getCartFromLS();
    cart.push(id)
    saveCartToLS(cart);
}

const removeFromLS = id => {
    const storedCart = getCartFromLS();
    const remainingCart = storedCart.filter(storedId => storedId !== id);
    saveCartToLS(remainingCart);
}

export {getCartFromLS, addItemTOCartLS, removeFromLS};