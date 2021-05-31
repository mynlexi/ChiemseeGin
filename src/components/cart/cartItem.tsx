import React from 'react'
import Image from 'next/image'
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
  updateQhandle: (action: number, id: string) => void;
  handleTotal:()=> void;

}

const CartItem = ({ 
  description, 
  hideEdit,
  quantity,
  id,
  image,
  title, 
  price,
  handleTotal,
  updateQhandle }: ICartItem): React.ReactElement => {
    const { removeCartValue } = useCartUpdateContext()!;
   
    const [itemQuantity, setItemQuantity] = React.useState(quantity);
    const [subTotal , setSubTotal ] = React.useState(price * quantity)
    
    React.useEffect(()=>{
        setSubTotal(price * itemQuantity)
    }, [subTotal])

    React.useEffect(()=>{
      handleTotal()
    }, [])
    
    React.useEffect(() => {
      if(!itemQuantity){
        setItemQuantity(quantity)
      }
    })
  
    const { 
        handleQtyIncrease, 
        handleQtyDecrease,
        getItemSubTotal,
        itemPrice } = useCalculateTotal(price);

        const increment = () =>{
          setItemQuantity(itemQuantity+ 1);
          // setSubTotal(getItemSubTotal(quantity+1, 1))
          updateQhandle(1, id)
          
        
        };
        const decrement= () => {
          setItemQuantity(itemQuantity - 1)
          // setSubTotal(getItemSubTotal(quantity-1, -1))
          updateQhandle(-1, id)
        };

        const remove = (event) => {
          setItemQuantity(null)
          removeCartValue(event)
          handleTotal()
        }

    return (
      <div key={`cart ${id}`}>
        <div className="flex justify-between">
          <div className="w-1/3 h-1/3">
            {/* <Image 
              src={image}
              layout="fill"
              /> */}
          </div>
          <div>
            <div> 
              <p>{title}</p>
              <p>{price}</p>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button
                  data-action="decrement"
                  className="qty-change bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                  onClick={decrement}
                >
                <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input
                  type="number"
                  className=" item-qty outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
                  name={`quantity-cart${id}`}
                  readOnly
                  min="1"
                  max="5000"
                  step="1"
                  value={itemQuantity}
                />
                <button
                  data-action="increment"
                  className="qty-change bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                  onClick={increment}
                >
                  <span className="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
              <li id={id}>
                <button onClick={(event) =>remove(event)} className="cart-item--remove bg-blue-600">
                  remove this product
                </button>
              </li>
            </div>
          </div>
     
      <p className="cart-item__total"> Sub-Total: €{price * itemQuantity }</p>
      
      </div>
    </div>

    )
}

export default React.memo(CartItem)