import styled from 'styled-components'
import { X } from 'react-feather'
import Image from 'next/dist/client/image'

const Background = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 500;
`

const ModalWrapper = styled.div`
  width: 800px;
  height: 800px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  
  border-radius: 10px;
`

const ModalImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;


  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  background: #fff;
`




export const Modal = ({showModal, setShowModal}) => {

  const set = () => {
    if (typeof window != "undefined"){
      window.localStorage.setItem("over18", "verified")
    }
    setShowModal(false)
    console.log("yo")
  }

  const goBack = () => {
    if (typeof window != "undefined"){
      window.history.back()
    }
  }
    
  
 
  return(
    <>
    {showModal ? 
    (
      <Background>
        <ModalWrapper showModal={showModal}>
         
          <ModalContent>
            <h1>Herzlich Willkommen bei Chiemsee Premium Gin!</h1>
            <p>Wie setzen uns für den verantwortungsvollen Genuss unserer Gins ein. Um unsere Webseite besuchen zu können, bitten wir Sie, uns Ihr Alter zu bestätigen.</p>
            <p>Sind Sie über 18 Jahre alt?</p>
            <div>
              <button onClick={set}>Ja</button>
              <button onClick={goBack}>nein</button>

            </div>
          
         
          </ModalContent>
        </ModalWrapper>
      </Background>
    )
    : null}
      
    </>
  )
}