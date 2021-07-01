import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Member = styled.div`


`

interface MemberInfo {
  key: number,
  path: string,
  width: number,
  height: number,
  title: string,
  author?: string,
  cite?: string,
  description?: string
  socialMedia?: string
  socialMediaLink?: string
}


export default function TeamMember({info}) {

  const {
    key = info.key,
    path = info.path,
    width = info.width,
    height = info.height,
    title = info.title,
    author = info.author ? info.author : null,
    description = info.description ? info.description : null,
    cite = info.cite ? info.cite : null,
    socialMedia = info.socialMedia ? info.socialMedia : null,
    socialMediaLink = info.socialMediaLink ? info.socialMediaLink : null,

  }: MemberInfo = info
  let quality = '75'
    if (width*height/1000 > 1440) {
      quality = `50`
    }
  const image = (
      <div className="px-12 md:px-10 lg:px-20 my-auto " >
      <Image src={path} width={width} height={height} layout="responsive" quality={quality} alt=""/>
      </div>
  )
  
  const even = (key % 2 === 0)

  const text = (
      <div className="p-5 mx-auto flex flex-col justify-items-center my-auto">
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <p>{author}<cite>{cite}</cite></p>
        </div>
        {socialMedia &&
        <a href={socialMediaLink} rel="external noreferrer noopener" target="_blank" className="my-2 hover:underline text-cgblue">{socialMedia}</a>}
      </div>
  )

  // test if i can just insert flex-row reverse lol

  return (
    <div>
    <Member key={`member ${key}`} className="hidden md:grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 justify-center align-middle py-5">
   
        {even ? (
          image
          ): text }
  
   
      {even ? (
          text
          ): image }
    
    </Member>
    <Member key={`mobile member ${key}`} className="block md:hidden mt-10 border-t border-cgblue py-5">
      {image}
      {text}
    </Member>
    </div>
  )
}
