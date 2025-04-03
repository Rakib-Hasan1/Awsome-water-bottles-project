import React, { use, useEffect, useState } from 'react';
import Bottle from '../bottle/Bottle';
import './Bottles.css';
import { addItemTOCartLS, getCartFromLS, removeFromLS } from '../../../utilities/localstorage';
import Cart from '../cart/Cart';

const Bottles = ({bottlePromise}) => {
    const [cart, setCart] = useState([]);

    const bottles = use(bottlePromise);


    useEffect(()=> {
        const storedCartIds = getCartFromLS();
        // console.log(storedCartIds,bottles);

        const storedCart = [];

        for(const id of storedCartIds){
            // console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if(cartBottle){
                storedCart.push(cartBottle);
            }
        }

        setCart(storedCart);


    },[bottles])



    const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addItemTOCartLS(bottle.id);
    }

    const handleRemoveFromCart = id => {
        console.log('remove id from cart', id)
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromLS(id);
    }

    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
            <p>Added Cart : {cart.length}</p>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className='bottles-container'>
            {
                bottles.map(bottle => <Bottle 
                    key={bottle.id}
                    handleAddToCart={handleAddToCart}
                     bottle={bottle}
                    ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;