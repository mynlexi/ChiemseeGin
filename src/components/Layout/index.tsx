import React from 'react'
import { useCheckoutUpdate } from '../../hooks/useCheckoutId'
import SideCart from '../cart'
import PopupAge from './popup/agepopup'
import { Footer } from './footer'
import { Navbar } from './navbar/navbar'
import { Modal } from './popup/Modal';
import { useRouter } from 'next/router'



export default function Layout({children}) {
  let isHome = false
  const router = useRouter()
  if (typeof window != "undefined"){
    isHome = (router.pathname === '/');
  } 
  
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
        <Navbar isHome={isHome}/>
        
        <main className="h-screen" id="content">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
