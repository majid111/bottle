import { useState } from 'react';
import { useEffect } from 'react';
import './Bottles.css'
import Bottle from '../bottle/Bottle';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    const [cart, setCart] = useState([]);
    const purchaseHandle = name => {
        console.log(typeof name);
        const newcart = [...cart, name];
        setCart(newcart);
    }

    console.log(bottles);
    return (
        <div>
            <h2>Bottles Here: {bottles.length} </h2>
            <h3>At Cart: {cart.length}</h3>
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