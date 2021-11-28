import React from 'react'





export default function Vimeoplayer() {

  const ratio = 1280/720

  
  const [windowWith, setWindowWith] = React.useState(300)

  function handleResize() {
    setWindowWith(window.innerWidth*0.70)

          window.addEventListener('resize', handleResize)

          return _ => {
            window.removeEventListener('resize', handleResize)
    }
  }

  React.useEffect(()=> {
    setWindowWith( window.innerWidth*0.70)
  }, [])

  React.useEffect(() => {
    handleResize()
  })

  

  return (
    <div id="video " className="">
  
       
    <div className="relative mx-auto vimeo-div">
    <iframe src="https://player.vimeo.com/video/645111515" width={`${windowWith}`} height={`${windowWith/ratio}`}  frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe></div>
        {/*  eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  )
}
