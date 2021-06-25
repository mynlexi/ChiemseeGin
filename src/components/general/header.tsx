import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'


interface HeaderInfo {
 

  pathBase: string,
  pathxs?: string,
  pathsm?: string,
  pathmd?: string,
  pathlg?: string,
  pathxl?: string,
  path2xl?: string,
  title: string,
  subtitle?: string,
  button?: string,
  buttonLink?: string,

}

export default function Header({header}) {
  
  const {
    
    pathBase = header.path ,
    pathxs = header.pathxs ? header.pathxs : null,
    pathsm = header.pathsm ? header.pathsm: null,
    pathmd = header.pathmd ? header.pathmd: null,
    pathlg = header.pathlg ? header.pathlg : null,
    pathxl = header.pathxl ? header.pathxl : null,
    path2xl = header.path2xl ? header.path2xl : null,
    title = header.title,
    subtitle = header.subtitle ? header.subtitle : null,
    button = header.button? header.button: null,
    buttonLink = header.buttonLink? header.buttonLink: null,

        }: HeaderInfo = header
  

    const Header = styled.div`
    background-image: url('${props => props.imageUrl ? props.imageUrl: ''}');
    min-height: 350px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: bottom bottom;
    background-size: cover;
    width: 100%;
    
    h2 {
      font-size: 24px;
    }
    
    @media(min-width: 480px) {
      background-image: url('${props => props.imageUrlxs ? props.imageUrlxs: props.imageUrl}');
   
    }
    @media(min-width: 640px) {
      background-image: url('${props => props.imageUrlsm ? props.imageUrlsm: props.imageUrl}');
    
    }
    @media(min-width: 768px) { 
      background-image: url('${props => props.imageUrlmd ? props.imageUrlmd: props.imageUrl}');
      min-height: 250px;
     
    }
    @media(min-width: 1024px) { 
      background-image: url('${props => props.imageUrllg ? props.imageUrllg: props.imageUrl}');
    }
    @media(min-width: 1280px) { 
      background-image: url('${props => props.imageUrlxl ? props.imageUrlxl: props.imageUrl}');
    }
    @media(min-width: 1536px) { 
      background-image: url('${props => props.imageUrl2xl ? props.imageUrl2xl: props.imageUrl}');

    }
  `

  // different paths for different sizes 4?
  //768=md


  // image in the background
  return (
    <div className="w-full p-0">
      <Header 
        imageUrl={pathBase}
        imageUrlxs={pathxs}
        imageUrlsm={pathsm}
        imageUrlmd={pathmd}
        imageUrllg={pathlg}
        imageUrlxl={pathxl}
        imageUrl2xl={path2xl}

         className="" placeholder="blur">
          <div className=" mx-auto py-36 md:py-20  md:mb-12 xl:py-36 flex flex-col justify-items-center text-center ">
            <h2>{title}</h2>
            { subtitle && (
              <h5>{subtitle}</h5>
              )}
         
          { button && (
            <button className="mt-8 py-4 text-cgblue opacity-100 bg-transparent w-1/4 mx-auto bg-opacity-0  bg-white md:bg-opacity-40 hover:bg-opacity-60" >
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
