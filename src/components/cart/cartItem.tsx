import React from 'react'
import useCalculateTotal from '../../hooks/useCalculateCart';
import { useCartUpdateContext } from '../../hooks/useCartStorage';
import QuantityInput from './quantityInput'

interface ICartItem {
  category?: string;
  description?: string;
  hideEdit?: boolean;
  id: string;
  image?: string;
  title: string;
  price: number;
  quantity: number;
}

const CartItem = ({ 
  description, 
  hideEdit,
  quantity,
  id,
  image,
  title, 
  price }: ICartItem): React.ReactElement => {
    const { removeCartValue } = useCartUpdateContext()!;
    const { 
        handleQtyIncrease, 
        handleQtyDecrease,
        itemPrice } = useCalculateTotal(price);

    return (

      <div key={id}>
      <p>{title}</p>
      <QuantityInput id={id} pQuantity={quantity}
        handleQtyDecrease={handleQtyDecrease}
        handleQtyIncrease={handleQtyIncrease} />
   
      <li id={id}>
        <button onClick={removeCartValue} className="bg-blue-600">
          remove this product
        </button>
      </li>

      <p> Total: €{itemPrice ? itemPrice : 0}</p>
    </div>

    )
}

export default React.memo(CartItem)