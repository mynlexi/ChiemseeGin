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
      <h3 className ="text-center mb-20 mt-0  page-title" >   Über Uns   </h3>
        <p>Inmitten saftiger Obstbaumwiesen, eingebettet in das Chiemgauer Voralpenland, liegt malerisch schön der Hof von Johann Guggenbichler und Sitz der gleichnamigen Edelbrandmanufaktur.</p>
        <p>Die Brennerei bildet den Hauptteil auf dem landwirtschaftlichen Anwesen, das neben dem Streuobst mit jahrhundertealten Bäumen auch ein Wildgehege beheimatet. </p>
        <p>Es mag ein Fleckchen Erde sein, mit dem Gott es besonders gut gemeint haben muss: grüne, saftige Wiesen, blühende Obstbäume, schützend umrahmt von den chiemgauer Bergen und den sanften Hügeln des Voralpenlandes – und inmitten dieser beruhigend ländlichen Idylle liegt der Guggenbichler Hof.</p>
        <p>Die Brennerei befindet sich in 5. Generation und besteht seit 1829. Seit jeher wird jeder Arbeitsschritt ausschließlich in Handarbeit verrichtet. Nur so kann die einzigartige Qualität eines „echten Guggenbichlers“ gewährleistet werden.</p>
        <p>Hier in Frasdorf am Chiemsee liegt der Ursprung unseres einzigartigen Chiemsee Gins.</p>
      </section>
      <section className="grid grid-cols-1 py-4 mx-auto w-full md:w-5/6 lg:w-3/4  ">
       
        {team.map((member, index) => (
        
            <TeamMember info={member} key={index} />
      
        ))}
      
    </section>
    </div>
  )
}
