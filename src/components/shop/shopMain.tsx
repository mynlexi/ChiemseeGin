import React, { useState } from 'react'
import Collection from './collection'
import { ButtonGroup, Tab } from './StyledElements'

function ShopMain({collections}) {

  const gins = collections[0]
  const accessoires = collections[1]
   let types = []
  collections.map((el => types.push(el.title)))
  

  const [active, setActive] = useState(types[0]);
  
  // get collections
  // get one tap and one list per collection
  // show only what the buttons shows
  return (
    <div className="mx-auto w-5/6 flex flex-col mb-50">
      <ButtonGroup>
        {types.map(type => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>

      <div>
       
        {collections.map((collection, idx) => {
          return(
          <Collection collection={collection} active={active} key={idx} />
          )
        })}
      </div>
    </div>
  )
}
export default ShopMain
