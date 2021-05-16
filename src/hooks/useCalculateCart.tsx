import * as React from "react";

import {getCartStorage} from '../utils/cartStorage'

interface CartCalculation {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleQtyDecrease: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleQtyIncrease: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleTotalCalculation: (input: Element[]) => null;
  itemPrice: number | undefined;
  total: number;
}

const useCalculateTotal = (price?: number): CartCalculation => {

  const [itemPrice, setItemPrice] = React.useState(price)

  const [total, setTotal] = React.useState<number>(()=> {
    const products = getCartStorage()

    if (products && products.length) {
      return products.map(product => product.price / 100 )
        .reduce((accum, curVal) => accum + curVal)
    } else {
      return 0;
    }
  })

  const getItemSubTotal = (inputAsString: string) => {
    const convertToNumber = parseInt(inputAsString);

    if (convertToNumber < 0) {
        return 0;
    }

    return convertToNumber * price!;
  };

  const handleTotalCalculation = (input: Element[]) => {
    if (!input.length) {
        setTotal(0);
        return null;
    } else {
        const currentTotal = input.map(element => parseFloat(element.textContent!.replace("Total: €", "")))
        .reduce((accum, curValue) => accum + curValue, 0);

        setTotal(currentTotal);
        return null;
    }
  };

  const handleQtyIncrease = (event: React.MouseEvent<HTMLButtonElement>) => {
    const inputElement = (event.target as HTMLButtonElement).previousElementSibling as HTMLInputElement;
    const itemSubTotal = getItemSubTotal(inputElement.value)
    setItemPrice(itemSubTotal)
  }

  
  const handleQtyDecrease = (event: React.MouseEvent<HTMLButtonElement>) => {
    const inputElement = (event.target as HTMLButtonElement).previousElementSibling as HTMLInputElement;
    const itemSubTotal = getItemSubTotal(inputElement.value)
    setItemPrice(itemSubTotal)
  }
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemPrice(parseInt((event.target as HTMLInputElement).value) * price!);
  };
  return {
    handleQtyDecrease,
    handleQtyIncrease,
    itemPrice,
    total,
    handleInputChange,
    handleTotalCalculation
  }
}

export default useCalculateTotal