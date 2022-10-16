import React from 'react'
import Helmet from 'react-helmet'

import Header from '../src/components/general/header'
import TeamMember from '../src/components/teamchiemsee/teamMember'
import {team} from '../src/components/teamchiemsee/teamconfig'

export default function Geschichte() {
  const header = {
    path: '/images/headers/winter-small.jpeg',
    pathxs: '/images/headers/winter-small.jpeg',
    pathsm: '/images/headers/winter-small.jpeg',
    pathmd: '/images/headers/landscape.jpeg',
    pathlg: '/images/headers/landscape.jpeg',
    pathxl: '/images/headers/landscape.jpeg',
    path2xl: '/images/headers/landscape.jpeg',
   
  }
  return (
    <div>
      <Helmet>
        <title>Über Uns</title>
      </Helmet>
      <Header header={header} />
      <section className="py-20 flex flex-col space-y-3">
      <h3 className ="text-center mb-20 mt-0  page-title" > Gin aus dem Chiemgau – Über Uns</h3>
          <p>Ein handg’machter Gin vom Chiemsee, verbunden mit Nachhaltigkeit, das war und ist der Traum der beiden Burschen Daniel Schex und Daniel Herkner, den Gründern des Start-Ups <span style={{fontStyle: "italic"}}>Chiemsee Premium Gin.</span> In unzähligen Versuchen entwickelten die beiden zusammen mit Brennmeister Johann Guggenbichler eine einzigartige Rezeptur, bestehend aus 15 handverlesenen Botanicals, hochwertigstem Alkohol und kristallklarem Gebirgsquellwasser aus den Chiemgauer Alpen.
        </p>

        <p>Ein extra angefertigtes Gemälde der Fraueninsel, von der regionalen Künstlerin Sina Obermaier, ziert das Etikett – denn Gin ist Kunst.</p>

        <p>Das Ergebnis: Ein bayerischer Gin der Extraklasse, entstanden aus Liebe zur Heimat, dem Chiemsee & Chiemgau, unserer Tradition und Lebenskultur. Mit viel Herzblut wird in kleinen exklusiven Chargen nach unserem selbst auferlegten Chiemgauer Gin-Reinheitsgebot hergestellt – denn Chiemsee Gin zählt zur Kategorie <span style={{fontStyle: "italic"}}>London Dry Gin</span> und somit zur Königsklasse unter den Wacholderschnäpsen.
        </p>
      </section>
      <section className="grid grid-cols-1 py-4 mx-auto w-full md:w-5/6 lg:w-3/4  ">
       
        {team.map((member, index) => (
        
            <TeamMember info={member} key={index} />
      
        ))}
      
    </section>
    </div>
  )
}
