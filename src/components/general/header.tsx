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
    min-height: 65vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center bottom;
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
      min-height: 75vh;
     
    }
    @media(min-width: 1024px) { 
      background-image: url('${props => props.imageUrllg ? props.imageUrllg: props.imageUrl}');
      min-height: 75vh;
    }
    @media(min-width: 1280px) { 
      background-image: url('${props => props.imageUrlxl ? props.imageUrlxl: props.imageUrl}');
      min-height: 75vh;
    }
    @media(min-width: 1536px) { 
      background-image: url('${props => props.imageUrl2xl ? props.imageUrl2xl: props.imageUrl}');
      min-height: 75vh;
    }
    /* ----------- iPhone 4 and 4S ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    background-image: url('${props => props.imageUrlxs ? props.imageUrlxs: props.imageUrl}') !important;
}

/* Portrait */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {background-image: url('${props => props.imageUrlxs ? props.imageUrlxs: props.imageUrl}')!important;
}

/* Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {background-image: url('${props => props.imageUrlxs ? props.imageUrlxs: props.imageUrl}')!important;

}

/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {background-image: url('${props => props.imageUrlxs ? props.imageUrlxs: props.imageUrl}')!important;

}

/* Portrait */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {background-image: url('${props => props.imageUrlxs ? props.imageUrlxs: props.imageUrl}')!important;
}

/* Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {background-image: url('${props => props.imageUrlxs ? props.imageUrlxs: props.imageUrl}')!important;

}

/* ----------- iPhone 6, 6S, 7 and 8 ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { background-image: url('${props => props.imageUrlxs ? props.imageUrlxs: props.imageUrl}')!important;

}

/* Portrait */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) { background-image: url('${props => props.imageUrlxs ? props.imageUrlxs: props.imageUrl}')!important;

}

/* Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) { background-image: url('${props => props.imageUrlxs ? props.imageUrlxs: props.imageUrl}')!important;

}

/* ----------- iPhone 6+, 7+ and 8+ ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3) { background-image: url('${props => props.imageUrlsm ? props.imageUrlsm: props.imageUrl}')!important;

}

/* Portrait */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) { background-image: url('${props => props.imageUrlsm ? props.imageUrlsm: props.imageUrl}')!important;

}

/* Landscape */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) { background-image: url('${props => props.imageUrlsm ? props.imageUrlsm: props.imageUrl}')!important;

}

/* ----------- iPhone X ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3) { background-image: url('${props => props.imageUrlmd ? props.imageUrlmd: props.imageUrl}')!important;
  min-height: 75vh;

}

/* Portrait */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) { background-image: url('${props => props.imageUrlmd ? props.imageUrlmd: props.imageUrl}')!important;
  min-height: 75vh;

}

/* Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) { background-image: url('${props => props.imageUrlmd ? props.imageUrlmd: props.imageUrl}')!important;
  min-height: 75vh;

}
/* ----------- iPad 1, 2, Mini and Air ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) { background-image: url('${props => props.imageUrllg ? props.imageUrllg: props.imageUrl}')!important;
  min-height: 75vh;
}

}

/* Portrait */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (orientation: portrait) 
  and (-webkit-min-device-pixel-ratio: 1) { background-image: url('${props => props.imageUrllg ? props.imageUrllg: props.imageUrl}')!important;
  min-height: 75vh;
}

}

/* Landscape */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 1) { background-image: url('${props => props.imageUrllg ? props.imageUrllg: props.imageUrl}')!important;
  min-height: 75vh;
}

}

/* ----------- iPad 3, 4 and Pro 9.7" ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 2) { background-image: url('${props => props.imageUrllg ? props.imageUrllg: props.imageUrl}')!important;
  min-height: 75vh;
}

}

/* Portrait */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (orientation: portrait) 
  and (-webkit-min-device-pixel-ratio: 2) { background-image: url('${props => props.imageUrllg ? props.imageUrllg: props.imageUrl}')!important;
  min-height: 75vh;
}

}

/* Landscape */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 2) { background-image: url('${props => props.imageUrllg ? props.imageUrllg: props.imageUrl}')!important;
  min-height: 75vh;
}

}

/* ----------- iPad Pro 10.5" ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 834px) 
  and (max-device-width: 1112px)
  and (-webkit-min-device-pixel-ratio: 2) {background-image: url('${props => props.imageUrlxl ? props.imageUrlxl: props.imageUrl}')!important;
  min-height: 75vh;

}

/* Portrait */
/* Declare the same value for min- and max-width to avoid colliding with desktops */
/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
@media only screen 
  and (min-device-width: 834px) 
  and (max-device-width: 834px) 
  and (orientation: portrait) 
  and (-webkit-min-device-pixel-ratio: 2) {background-image: url('${props => props.imageUrlxl ? props.imageUrlxl: props.imageUrl}')!important;
  min-height: 75vh;

}

/* Landscape */
/* Declare the same value for min- and max-width to avoid colliding with desktops */
/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
@media only screen 
  and (min-device-width: 1112px) 
  and (max-device-width: 1112px) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 2) {background-image: url('${props => props.imageUrlxl ? props.imageUrlxl: props.imageUrl}')!important;
  min-height: 75vh;

}

/* ----------- iPad Pro 12.9" ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 1024px) 
  and (max-device-width: 1366px)
  and (-webkit-min-device-pixel-ratio: 2) {background-image: url('${props => props.imageUrlxl ? props.imageUrlxl: props.imageUrl}')!important;
  min-height: 75vh;

}

/* Portrait */
/* Declare the same value for min- and max-width to avoid colliding with desktops */
/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
@media only screen 
  and (min-device-width: 1024px) 
  and (max-device-width: 1024px) 
  and (orientation: portrait) 
  and (-webkit-min-device-pixel-ratio: 2) {background-image: url('${props => props.imageUrlxl ? props.imageUrlxl: props.imageUrl}')!important;
  min-height: 75vh;

}

/* Landscape */
/* Declare the same value for min- and max-width to avoid colliding with desktops */
/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
@media only screen 
  and (min-device-width: 1366px) 
  and (max-device-width: 1366px) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 2) {background-image: url('${props => props.imageUrlxl ? props.imageUrlxl: props.imageUrl}')!important;
  min-height: 75vh;

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

         className={ header.title ? "bg-blend-soft-light bg-white bg-opacity-40 flex" : ""} placeholder="blur">
          <div className="mx-auto py-36 md:py-20  md:mb-12 xl:py-36 flex flex-col justify-items-center justify-center text-center ">
            <h1 className="text-4xl">{title}</h1>
            { subtitle && (
              <h5>{subtitle}</h5>
              )}
         
          { button && (
            <button className=" text-2xl mt-8 py-4 text-cgblue mx-auto bg-opacity-0  md:bg-opacity-40 hover:bg-opacity-60 w-3/4" >
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
