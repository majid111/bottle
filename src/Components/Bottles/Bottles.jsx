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

    console.log(bottles);
    return (
        <div>
            <h2>Bottles Here: {bottles.length} </h2>
            <div className='bottles'>
                {
                    bottles.map(bottle =>
                        <Bottle key={bottle.id} bottle={bottle} ></Bottle>
                    )
                }</div>
        </div>
    );
};

export default Bottles;