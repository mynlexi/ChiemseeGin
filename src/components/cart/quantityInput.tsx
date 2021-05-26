import React from "react";
import useCalculateTotal from "../../hooks/useCalculateCart";
import handleQtyIncreaseC from '../../hooks/useCartStorage'

type handlerFunction = (event: React.MouseEvent<HTMLButtonElement>) => void;

interface IQuantityInput {
  handleQtyDecrease: handlerFunction;
  handleQtyIncrease: handlerFunction;
  id: string;
}

function QuantityInput({
  id,
  pQuantity,
  handleQtyDecrease,
  handleQtyIncrease,
}) {
  const [quantity, setQuantity] = React.useState(pQuantity);

  
  const increment = () =>{
    setQuantity(quantity + 1);
    handleQtyIncrease(quantity)
    
  
  };
  const decrement= () => {
    setQuantity(quantity - 1)
    handleQtyDecrease(quantity)

  
  };
  return (
    
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
          value={quantity}
        />
        <button
          data-action="increment"
          className="qty-change bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          onClick={increment}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
 
  );
}

export default React.memo(QuantityInput);
