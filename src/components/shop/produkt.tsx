import React from "react";
import Link from "next/link";
import {
  useCartContext,
  useCartUpdateContext,
} from "../../hooks/useCartStorage";
import { useSideCartUpdate } from "../../hooks/useOpenSidebar";
import { ShopCartContainer } from "./StyledElements";
import ProductImageBG from "./productImage";

function Product({ product, right }) {
  let { cart } = useCartContext();
  if (cart === null) {
    cart = [];
  }
  const {
    id = product.Id,
    title = product.title,
    imageUrl = product.images[0].src,
    variantId = product.variants[0].id,
    price = Number(product.variants[0].price),
    handle = product.handle,
    descriptionH = product.descriptionHtml,
    description = product.description,
    quantity = 1,
  } = product;

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
      <ShopCartContainer className={" mx-14"} reverse={!!right}>
        <div className="w-full md:w-1/2 relative">
          <ProductImageBG imageUrl={imageUrl} />
         
         
        </div>
        <div className="w-full md:w-1/2 flex flex-col content-between py-4 md:pl-8 ios-device-col ">
          <div className="flex-1">
            <p className="font-bold text-2xl">{title}</p>
           <div dangerouslySetInnerHTML={{ __html: descriptionH }} className="flex flex-col space-y-4"></div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-5 space-y-3 my-8 mx-auto ">
            <div className="mx-auto my-auto flex-row">
              <h4 className="mx-auto my-auto"><strong>Preis</strong> {price}0 €</h4>
               <div className="text-xs flex-row justify-center ">
                 <span className="text-center">inkl. 19% MwSt.  </span>
                 <span className="text-center">zzgl. <Link href="/versandinformation"><a className="text-cgblue ">Versand</a></Link></span>
               </div>
            </div>
            <div className=" p-2">
              {cart?.some((item) => item.productId === id) ? (
                <button onClick={openSideCart} className="text-gray-800 bg-gray-100 p-4">Warenkorb anzeigen</button>
              ) : (
                <button onClick={addProduct} className=" hover:bg-white hover:text-cgblue text-white p-4 transition-colors bg-cgblue"> In den Warenkorb </button>
              )}
            </div>
          </div>
        </div>
      </ShopCartContainer>
    </div>
  );
}

export default Product;
