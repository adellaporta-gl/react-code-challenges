import { useEffect, useReducer, useState } from 'react'

const items = [{
  name: 'apple',
  price: 0.39
}, {
  name: 'banana',
  price: 0.79
}, {
  name: 'cherry tomatoes',
  price: 3.99
}]

function ShoppingCart() {
  const [cart, setCart] = useState([{ name: 'apple', quantity: 3, price: 0.39 }]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(() => {
      const cartCopy = cart.concat();
      var auxT = 0;
      cartCopy.forEach(cartItem => auxT += cartItem.price * cartItem.quantity);
      return auxT;
    });
  }, [cart]);
  const addToCart = (item) => {
    const cartCopy = cart.concat();
    const itemInCart = cart.find(c => c.name === item.name);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      item.quantity = 1;
      cartCopy.push(item);
    }
    setCart(cartCopy);
  }
  const addItem = (item) => {
    const cartCopy = cart.concat();
    const newItemValue = cartCopy.find(c => c.name === item.name);
    newItemValue.quantity += 1;
    setCart(cartCopy);
  }
  const removeItem = (item) => {
    const cartCopy = cart.concat();
    const itemToDeleteIndex = cartCopy.findIndex(c => c.name === item.name);
    if (cartCopy[itemToDeleteIndex].quantity > 1) {
      cartCopy[itemToDeleteIndex].quantity -= 1;
    } else {
      cartCopy.splice(itemToDeleteIndex, itemToDeleteIndex + 1);
    }
    setCart(cartCopy);
  }
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className='cart'>
        <div className='items'>
          <h2>Items</h2>
          {items.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>)
          )}
        </div>
        <div>
          <h2>Cart</h2>
          {cart.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={() => removeItem(item)}>-</button>
                {item.quantity}
                <button onClick={() => addItem(item)}>+</button>
              </p>
              <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='total'>
        <h2>Total: ${(total).toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default ShoppingCart
