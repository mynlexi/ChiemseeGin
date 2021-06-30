import styled from 'styled-components'
import Helmet from 'react-helmet'
import src from '../../../../public/images/johanngugg.png'
import Image from 'next/image'

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
  blur: 15rem;
`

const ModalWrapper = styled.div`
  width: 800px;
  min-height: 300px;
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
           <Helmet>
        <body className={showModal ? 'blur' : ''} />
      </Helmet>
        <ModalWrapper showModal={showModal} className="flex justify-center">
         
          <ModalContent className="py-3" >
            {/* maybe gin in the background half the bottle large? */}
            <h1 className="text-center">Chiemsee Gin – Eine Perle des Genusses direkt vom bayerischen Meer schreiben</h1>
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-2 bg-black my-auto ml-4">
                <Image src={src} layout="responsive" placeholder="blur" alt=""/>
              </div>
              <div className="col-span-3 my-auto pr-4"> 
            
            <p>Wir setzen uns für den verantwortungsvollen Genuss unserer Gins ein. Um unsere Webseite besuchen zu können, bitten wir Sie, uns Ihr Alter zu bestätigen.</p>
            <p className="hidden md:block">Sind Sie über 18 Jahre alt?</p>
            <div className=" space-x-4 ml-auto hidden md:flex">
              <button onClick={set}>Ja</button>
              <button onClick={goBack}>Leider nein</button>
              </div>
            </div>
          </div>
          <p className="block md:hidden text-center px-4 mx-auto">Sind Sie über 18 Jahre alt?</p>
          <div className="flex space-x-4 m-auto  md:hidden">
              <button onClick={set}>Ja</button>
              <button onClick={goBack}>Leider nein</button>
          </div>
         
          </ModalContent>
        </ModalWrapper>
      </Background>
    )
    : null}
      
    </>
  )
}