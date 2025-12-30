const CartItems = ({
  cart,
  increaseQty,
  decreaseQty,
  removeItem,
}) => {
  return (
    <div className="cart-items">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
       
          <img src={item.image} alt={item.name} />

          <div className="item-details">
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>

            <div className="qty">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>

            <button
              className="remove"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
