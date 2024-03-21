import { useState } from 'react';
import { useEffect } from 'react';
import './Bottles.css'
import Bottle from '../bottle/Bottle';
import { addToLs, getStoredCart } from '../../Utilities/localStorage';
import Cart from '../Cart/Cart';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    useEffect(() => {
        if (bottles.length) {
            const storedCart = getStoredCart();

            const savedCart = [];

            storedCart.map(id => {
                console.log(id);
                console.log(bottles.length);
                const bottle = bottles.find(bottles=>bottles.id === id);
                if(bottle){
                    savedCart.push(bottle);
                }
            })

            console.log(savedCart);
            setCart(savedCart);
        }
    }, [bottles])

    const [cart, setCart] = useState([]);
    const purchaseHandle = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLs(bottle.id);
    }

    return (
        <div>
            <h2>Bottles Here: {bottles.length} </h2>
            <Cart cart={cart}></Cart>
            <div className='bottles'>
                {
                    bottles.map(bottle =>
                        <Bottle purchaseHandle={purchaseHandle} key={bottle.id} bottle={bottle} ></Bottle>
                    )
                }</div>
        </div>
    );
};

export default Bottles;