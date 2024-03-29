import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from 'next/image'
import {
  useCartContext,
  useCartUpdateContext,
} from "../../hooks/useCartStorage";
import { useSideCartUpdate } from "../../hooks/useOpenSidebar";
import { ShopCartContainer } from "./StyledElements";
import ProductImageBG from "./productImage";
import style from "./Shop.module.css"
import premium from "../../../public/images/products/premiumGin.jpeg"
import alpen from "../../../public/images/products/alpengluehen-min-min.webp"




const originaldetails ={
    temperament: ' - Destilliert aus 15 handverlesenen Botanicals. Charakterstark mit ausgewogener Zitrusnote.',
  src: premium

}

const alpendetails ={
  temperament: ' - Inspiriert von den glühenden Alpen des Sonnenuntergangs im Chiemgau. Himbeere und Orange runden den fruchtig floralen Geschmack ab.',
  src: alpen
}
const details ={
  'original': originaldetails,

  'alpen': alpendetails
}
type Sorte = "original" | "alpen"
interface ProductProps{
  product: any;
  sorte: Sorte;
  mobile: boolean;
}
function Product(props: ProductProps) {
  const  {product, sorte, mobile} = props
    // console.log(product, "product")
  let { cart } = useCartContext();
  if (cart === null) {
    cart = [];
  }
  // console.log(product.variants[0])
  const {
    id = product.Id,
    title = product.title,
    imageUrl = product.images[1].src,
    variantId = product.variants[0].id,
    price = Number(product.variants[0].price.amount),
    handle = product.handle,
    descriptionH = product.descriptionHtml,
    description = product.description,
    quantity = 1,
  } = product;
 const [addonRender, setAddOnRender]=useState<boolean>(false)
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

 const [productDetails, setDetails] = useState(details[sorte])
  const [productHovered, setProductHovered] = useState(false)

  const onMouseEnter =()=>{
      if(mobile)return
    setProductHovered(true)
  }

  const onMouseLeave =()=>{
    setProductHovered(false)
  }

   useEffect(()=>{
    setAddOnRender(true)
   }, [])


  return (
    <div key={`product at product/index ${id}`}>
      <div className={mobile? style.mobile_container: [ style.product_container, sorte == "alpen" ? style.product_flexreverse: ""].join(" ")}
       onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}
      >
          {!mobile ? null :  <div
              className={ [ "text-2xl text-cgblue", style.product_info_details_title,
                  productHovered ? style.product_info_details_title_hover : "" ].join( " " ) }>{ title }</div>}
        <div className={[ style.product_image, addonRender ? style.product_image_render : "" ].join(" ")}>

          { !mobile &&  <div className={[ style.product_image_absolute,sorte == "alpen" ? style.product_position_left: ""].join(" ")}>
                <div className={[ style.bluredImage, productHovered ? style.blured_onHover:"" ].join(" ")}
                     style={{backgroundImage:   `url(${productDetails.src.src})`}}/>
            </div> }
              <div className={[ style.product_image_absolute, style.product_img_absolute_real, productHovered ? style.product_img_absolute_hover : ""].join(" ")}>
            <Image
                src={productDetails.src}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                quality={ 75}

            />
          </div>

      </div>

          <div
              className={ mobile ? style.product_info_box_mobile : [ style.product_info_box,
                  sorte == "alpen" ? style.product_align_end : "" ].join( " " ) }>
              {mobile ? null :  <div
                  className={ [ "text-2xl text-cgblue", style.product_info_details_title,
                      productHovered ? style.product_info_details_title_hover : "" ].join( " " ) }>{ title }</div>}
              <div
                  className={mobile ? [ style.product_info_temperament,style.padding_20 ].join(" "):  [
                      sorte == "alpen" ? style.product_align_end : "" ].join( " " ) }>
                  <i>London Dry Gin</i> { productDetails.temperament }
              </div>

              <div className={[style.product_addTo,mobile ? style.padding_20:   sorte == "alpen" ? style.flex_end: style.flex_start ].join(" ") }>
                  <div className={ style.product_addTo_details }>
                      <div className={ style.product_addTo_details_title }><strong>{ price }0  {/*€*/}</strong></div>
                      <div className={ style.product_addTo_details_subtitle + " text-xs " }>
                          <span className="text-center">inkl. 19% MwSt.  </span>
                          <span className="text-center">zzgl. <Link href="/versandinformation"><a className="text-cgblue ">Versand</a></Link></span>
                      </div>
                  </div>
                  { cart?.some( (item) => item.productId === id ) ? (
                      <button
                          onClick={ openSideCart }
                          className="text-gray-800 bg-gray-100 p-4">Warenkorb anzeigen</button>
                  ) : (
                        <button
                            onClick={ addProduct }
                            className=" hover:bg-white hover:text-cgblue text-white p-4 transition-colors bg-cgblue"> In
                            den Warenkorb </button>
                    ) }

              </div>
              <div
                  className={ mobile? [style.product_info_details,style.padding_20 ].join(" ") : [ style.product_info_details,
                      sorte == "alpen" ? style.product_align_end : "" ].join( " " ) }>
                  <div className={ style.product_info_details_title }>

                  </div>
                  <div className={ style.product_info_details_subtitle + " text-lg md:p-0" }>
                      <span><strong>45% vol</strong></span> | <span><strong>0.5 Liter</strong></span> |
                      Literpreis: <span>{ price * 2 }0  {/*€*/}</span>
                  </div>

              </div>
          </div>
      </div>
    </div>
  );
}





export default Product;


export function OldProduct({ product, right }) {
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


