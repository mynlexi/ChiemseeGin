import React from 'react'
import Image from 'next/image'
import useCalculateTotal from '../../hooks/useCalculateCart';
import { useCartUpdateContext } from '../../hooks/useCartStorage';
import QuantityInput from './quantityInput'
import { CartImage } from './SideCartElements';
import {Trash} from 'react-feather'

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
      <div key={`cart ${id}`} className="my-5 cartitem flex align-middle justify-items-center border-b">
        <div className="flex mt-5 overflow-hidden justify-items-center">
          <div className="w-1/3 justify-items-center flex">
           <CartImage src={image} />
          </div>
          <div className="z-10  ">
            <div className="justify-items-start flex flex-col text-left"> 
              <p className="font-semibold">{title}</p>
              <p className="text-gray-600">{price}</p>
            </div>
            <div className="flex flex-row" >
              <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button
                  data-action="decrement"
                  className="qty-change  text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-lg cursor-pointer outline-none"
                  onClick={decrement}
                >
                <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input
                  type="number"
                  className=" item-qty outline-none focus:outline-none text-center w-full -mr-3 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
                  name={`quantity-cart${id}`}
                  readOnly
                  min="1"
                  max="5000"
                  step="1"
                  value={itemQuantity}
                />
                <button
                  data-action="increment"
                  className="qty-change border-gray-50 text-gray-600 hover:bg-gray-400 border- h-full w-20 rounded-lg cursor-pointer"
                  onClick={increment}
                >
                  <span className="m-auto text-2xl font-thin">+</span>
                </button>
                <ol className="">
                  <li id={id} className="">
                <button onClick={(event) =>remove(event)} className="cart-item--remove">
                  <Trash size={24} />
                </button>
              </li>
          </ol>
              </div>
               <p className="cart-item__total hidden"> Sub-Total: €{price * itemQuantity }</p>
            </div>
          </div>
          
      
      </div>
    </div>

    )
}

export default React.memo(CartItem)