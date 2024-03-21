
const Cart = ({cart}) => {
    return (
        <div>
            <h3>Cart: {cart.length}</h3>
                <ul>
                    {
                    cart.map(id=><li>{id.name}</li>)
                    }
                </ul>
        </div>
    );
};

export default Cart;