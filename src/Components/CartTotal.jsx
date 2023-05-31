import React, { useContext } from 'react'
import { AppContext } from './Context'

const CartTotal = () => {

    const {total_amount, total_items} = useContext(AppContext);

  return (
    <article className='cart-bill'>
      <p>Billing</p>
      <h4>Total Items: {total_items}</h4>
      <h3>Order Total: &#8377; {total_amount}</h3>
      <button className='btn-checkout'> Checkout</button>
    </article>
  )
}

export default CartTotal
