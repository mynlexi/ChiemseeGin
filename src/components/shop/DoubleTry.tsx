import {useCartContext, useCartUpdateContext} from "../../hooks/useCartStorage";
import {useState} from "react";
import {useSideCartUpdate} from "../../hooks/useOpenSidebar";

interface DoubleTryProps{
    product: any;

}


export function DoubleTry(props: DoubleTryProps){
    const {product} = props
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
    console.log(product)
    return (
        <div >
            {title}
            <img src={imageUrl}/>
        </div>
    )

}