import './Bottle.css'

const Bottle = ({ bottle,purchaseHandle }) => {
    const { name, img, price } = bottle;
    console.log();
    return (
        <div className='bottle'>
            <h3>Bottle Name: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={()=>purchaseHandle(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;