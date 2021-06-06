import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'


interface HeaderInfo {
  
  path: string,
  title: string,
  subtitle?: string,
  button?: string,
  buttonLink?: string,

}

export default function Header({header}) {
  
  const {
    path = header.path,
    title = header.title,
    subtitle = header.subtitle ? header.subtitle : null,
    button = header.button? header.button: null,
    buttonLink = header.buttonLink? header.buttonLink: null,

        }: HeaderInfo = header
  

    const Header = styled.div`
    background-image: url('${props => props.imageUrl ? props.imageUrl: ''}');
    min-height: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;}
    width: 100%;
    
    h2 {
      font-size: 24px;
    }
    
  `

  

  // iamge in the background
  return (
    <div className="w-full">
      <Header imageUrl={path} className="w-full bg-blend-luminosity bg-white hover:bg-transparent">
          <div className=" mx-auto mb-12 p-24 flex flex-col justify-items-center text-center">
            <h2>{title}</h2>
            { subtitle && (
              <h5>{subtitle}</h5>
              )}
         
          { button && (
            <button className="mt-8 py-4 border-white opacity-100 bg-transparent w-1/4 mx-auto hover:bg-white hover:opacity-30" >
              <Link href={buttonLink}>
                {button}
              </Link>
            </button>
            )}
          </div>

      </Header>
    </div>
  )
}
