import {useCartContext, useCartUpdateContext} from "../../hooks/useCartStorage";
import React, {useState} from "react";
import {useSideCartUpdate} from "../../hooks/useOpenSidebar";
import style from './Shop.module.css'
import Image from "next/image";
import doubleImg from '../../../public/images/products/Chiemsee_Gin_klein_03.webp'
import Link from "next/link";
interface DoubleTryProps{
    product: any;
    mobile: boolean

}


export function DoubleTry(props: DoubleTryProps){
    const {product, mobile} = props
    let { cart } = useCartContext();
    if (cart === null) {
        cart = [];
    }
    const {
        id = product.Id,
        title = product.title,
        imageUrl = product.images[1].src,
        variantId = product.variants[0].id,
        price = Number(product.variants[0].price),
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
    const text = "Du kannst dich nicht entscheiden? Probiere beide Sorten mit unserem Kombi-Paket. Perfekt für dein nächstes Gin Tasting."
        //left text, middle picture, right shoping
    // on mobile same as others?
    // only text at top?
    return (
        <section>
        <div className={mobile? style.double_try_banner_mobile:style.double_try_banner}>
            <div className={( mobile? style.double_try_box_mobile:style.double_try_box  )+ " text-gray-700 bg-blue-100"}>
                <span className="font-bold">Du kannst dich nicht entscheiden?</span>
                Probiere beide Sorten mit unserem Kombi-Paket. Perfekt für dein nächstes Gin Tasting.   </div>
            <div className={(mobile? style.double_try_box_middle_mobile:style.double_try_box_middle) + " bg-blue-100"}>
                <div className={mobile? style.double_try_banner_img_bound_mobile:style.double_try_banner_img_bound}>
                <div className={ mobile? style.double_try_banner_img_mobile:style.double_try_banner_img}>
                    <Image
                        src={doubleImg}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        quality={ 75}

                    />
                </div>
                </div>
            </div>
            <div className={ (mobile? style.double_try_box_end_mobile:style.double_try_box_end) + " bg-blue-100"}>
                <div className={ mobile ? " text-lg p-0 w-full text-left ":" text-lg px-4 md:p-0" }>
                    Inhalt: <span><strong>2x 0.2 Liter</strong></span>  <br/>
                    Preis pro Liter: <span><strong>99.50 €</strong></span>
                </div>
                <div className={style.double_try_box_end_lower}>
                <div className={ style.product_addTo_details }>
                    <div className={ style.product_addTo_details_title +" text-gray-700" }>Preis <strong>{ price }0 €</strong></div>
                    <div className={ style.product_addTo_details_subtitle + " text-xs " +" text-gray-700" }>
                        <span className="text-center">inkl. 19% MwSt.  </span>
                        <span className="text-center">zzgl. <Link href="/versandinformation"><a className=" text-gray-700" >Versand</a></Link></span>
                    </div>
                </div>
                { cart?.some( (item) => item.productId === id ) ? (
                    <button
                        onClick={ openSideCart }
                        className="text-gray-800 bg-gray-100 p-4">Warenkorb anzeigen</button>
                ) : (
                      <button
                          onClick={ addProduct }
                          className=" hover:bg-white hover:text-cgblue text-white p-4 transition-colors bg-cgblue">In

                          den Warenkorb </button>
                  ) }
            </div>
            </div>
        </div> </section>
    )

}