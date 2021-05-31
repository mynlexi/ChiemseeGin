import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import styled from "styled-components";
import { Modal } from './Modal';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

`

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`

function PopupAge() {
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

  const openModal = () => {
    
    setShowModal(prev => !prev)
    console.log(showModal)
  }
  return (
    <>
    <Container>
      <Button onClick={openModal}>I am modal</Button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </Container>
    </>
  )
}

export default PopupAge