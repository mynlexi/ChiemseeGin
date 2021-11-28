import React from "react"
import { CartImage } from "./SideCartElements"
import { X} from 'react-feather'
import { useCartUpdateContext } from "../../hooks/useCartStorage";
import Link from 'next/link'
import src from '/public/images/upseell.jpeg'

export function UpsellItem({product, displayed, handleDisable}){
    const { addCartValue } = useCartUpdateContext();
    if(product == null){
        return (<></>)
    }

    let image = product.images[2].src
    const {
        id = product.Id,
        title = product.title,
        imageUrl = src.src,
        variantId = product.variants[0].id,
        price = Number(product.variants[0].price),
        handle = product.handle,
        descriptionH = product.descriptionHtml,
        description = product.description,
        quantity = 1,
    } = product;


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
        handleDisable()

    };

    return(
        <>
        {
        displayed ?
            <div className={"upsell-container overflow-y-scroll w-60 md:w-auto pt-20 md:pt-12"}>

        <div className={'flex relative grid grid-cols-1 md:grid-cols-2 '}>
            <div className={'flex items-center upsellimage '}>
                <CartImage src={src.src} />
            </div>
            <div className={"flex-col flex"}>
                <div>
                    <div className="flex flex-col text-base">Vier hochwertige Gin-Kühlsteine aus Edelstahl. Kein verwässern mehr deines Gin Tonics durch Eiswürfel. Das perfekte Upgrade.</div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-5 space-y-3 mx-auto ">
                    {/*<div className="mx-auto my-auto flex-row">
                        <h4 className="mx-auto my-auto"> {price}0 €</h4>

                    </div>*/}
                    <div className=" p-2">
                            <button onClick={addProduct} className=" hover:bg-white hover:text-cgblue text-white transition-colors bg-cgblue upsell-buy-button"> Für {price}0 € hinzufügen </button>   <div className="text-xs flex-row justify-center ">
                        <span className="text-center">inkl. 19% MwSt.  </span>
                        {/*   <span className="text-center">zzgl. <Link href="/versandinformation"><a className="text-cgblue ">Versand</a></Link></span>*/}
                    </div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() =>handleDisable()} className={'  upsell-close-button'}>
                 <X size={24} />
                </button>
            </div>
        </div>  </div> : null }</>
    )
}


//description
//"Vier hochwertige Gin-Kühlsteine aus Edelstahl Kein verwässern mehr durch klassische Eiswürfel"