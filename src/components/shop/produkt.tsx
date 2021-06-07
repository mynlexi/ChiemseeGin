import React from "react";
import Link from "next/link";
import {
  useCartContext,
  useCartUpdateContext,
} from "../../hooks/useCartStorage";
import { useSideCartUpdate } from "../../hooks/useOpenSidebar";
import { ShopCartContainer } from "./StyledElements";
import ProductImageBG from "./productImage";

function Product({ product }) {
  let { cart } = useCartContext();
  if (cart === null) {
    cart = [];
  }
  const {
    id = product.Id,
    title = product.title,
    imageUrl = product.images[0].src,
    variantId = product.variants[0].id,
    price = parseInt(product.variants[0].price),
    handle = product.handle,
    descriptionH = product.descriptionHtml,
    description = product.description,
    quantity = 1,
  } = product;
  console.log(product, `${descriptionH}`)
  const { addCartValue } = useCartUpdateContext();
  const { setSideCartOpen } = useSideCartUpdate();

  const addProduct = () => {
    addCartValue({
      productId: id,
      variantId: variantId,
      image: imageUrl,
      title: title,
      price: price,
      quantity: quantity,
      subTotal: quantity * price,
    });
    setSideCartOpen(true);
  };
  const openSideCart = () => {
    setSideCartOpen(true);
  }

  return (
    <div key={`product at product/index ${id}`}>
      <ShopCartContainer className=" mx-14">
        <div className="w-full md:w-1/2 relative">
          <ProductImageBG imageUrl={imageUrl} />
         
         
        </div>
        <div className="w-full md:w-1/2 flex flex-col content-between py-2 ">
          <div className="flex-1">
            <p className="font-bold text-2xl">{title}</p>
           <div dangerouslySetInnerHTML={{ __html: descriptionH }}></div>
          </div>
          <div className="flex space-x-5 mb-8 mx-auto ">
         
            <div className=" p-2">
              {cart?.some((item) => item.productId === id) ? (
                <button onClick={openSideCart} className="text-gray-800 bg-gray-100 p-4">Warenkorb anzeigen</button>
              ) : (
                <button onClick={addProduct} className="bg-blue-700 text-white hover:bg-white hover:text-blue-800 p-4 transition-colors"> In den Warenkorb </button>
              )}
            </div>
          </div>
        </div>
      </ShopCartContainer>
    </div>
  );
}

export default Product;
