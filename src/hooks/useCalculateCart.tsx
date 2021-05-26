import * as React from "react";

import {getCartStorage} from '../utils/cartStorage'

interface CartCalculation {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleQtyDecrease: ( quant: number) => void;
  handleQtyIncrease: ( quant: number) => void;
  getItemSubTotal: ( quant: number, action: number) => number;
  handleTotalCalculation: (input: Element[]) => null;
  itemPrice: number | undefined;
  total: number;
  updateTotal: () => number;
}

const useCalculateTotal = (price?: number): CartCalculation => {

  const [itemPrice, setItemPrice] = React.useState(price)

  const updateTotal  = (): number => {
    const products = getCartStorage()

    if (products && products.length) {
      return products.map(product => product.subTotal ) 
        .reduce((accum, curVal) => accum + curVal)
        
    } else {
      return 0;
    }
  }

  const [total, setTotal] = React.useState<number>(()=> {
   return updateTotal()
    
  })
  // console.log("hook file setTotal", total)inputAsString: string, from?: number
  const getItemSubTotal = (quant, action) => {
    // let convertToNumber = parseInt(inputAsString);

    if (quant < 0) {
        return 0;
    }
    if(action){
      quant += action
    }

    return quant * price!;
  };
  // watch this with language settings (naming of sub-total fields)
  const handleTotalCalculation = (input: Element[]) => {
    // console.log("handle total cal", "input", input)

    if (!input.length) {
        setTotal(0);
      
        return null;
    } else {
        const currentTotal = input.map(element => parseFloat(element.textContent!.replace("Sub-Total: €", "")))
        .reduce((accum, curValue) => accum + curValue, 0);
       
        setTotal(currentTotal);
        return null;
    }
    
  };

  const handleQtyIncrease = (quant: number) => {
    const itemSubTotal = getItemSubTotal(quant, 1)
    setItemPrice(itemSubTotal)
    
  }

  
  const handleQtyDecrease = (quant: number) => {
    const itemSubTotal = getItemSubTotal(quant, 1)
    setItemPrice(itemSubTotal)
    
  }
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemPrice(parseInt((event.target as HTMLInputElement).value) * price!);
  };
  return {
    handleQtyDecrease,
    handleQtyIncrease,
    getItemSubTotal,
    itemPrice,
    total,
    handleInputChange,
    handleTotalCalculation,
    updateTotal,
  }
}

export default useCalculateTotal