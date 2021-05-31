import React from 'react'
import { useCheckoutUpdate } from '../../hooks/useCheckoutId'
import SideCart from '../cart'
import PopupAge from './popup/agepopup'
import { Footer } from './footer'
import { Navbar } from './navbar'
import { Modal } from './popup/Modal';


export default function Layout({children}) {
  const {addId} = useCheckoutUpdate()
  React.useEffect(() => {
    addId()
  }, [])

  const [showModal, setShowModal] = React.useState(false)
  
  let marked =""
  React.useEffect(() => {
    if (typeof window != "undefined"){
     marked =  window.localStorage.getItem("over18")
     console.log("useeffect", marked)
     if (!marked) {
       setShowModal(true)
     }
    }
  }, []) 

  return (
  
    <div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div>
        <Navbar />
        
        <main className="h-screen" id="content">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
