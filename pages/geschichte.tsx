import React from 'react'
import Header from '../src/components/general/header'
import TeamMember from '../src/components/teamchiemsee/teamMember'
import {team} from '../src/utils/teamconfig'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default function Geschichte() {
  const header = {
    path: '/images/headers/teal-25-small.jpg',
    pathxs: '/images/headers/teal-25-small.jpg',
    pathsm: '/images/headers/teal-50-small.jpg',
    pathmd: '/images/headers/teal-50-small.jpg',
    pathlg: '/images/headers/teal-50-medium.jpg',
    pathxl: '/images/headers/teal-50-large1.jpg',
    path2xl: '/images/headers/teal-50-large3.jpg',
    title: 'Geschichte',
   
  }
  return (
    <div>
      <Header header={header} />
      <section className="py-20 flex flex-col space-y-3">
        <p>Inmitten saftiger Obstbaumwiesen, eingebettet in das Chiemgauer Voralpenland, liegt malerisch schön der Hof von Johann Guggenbichler und Sitz der gleichnamigen Edelbrandmanufaktur.</p>
        <p>Die Brennerei bildet den Hauptteil auf dem landwirtschaftlichen Anwesen, das neben dem Streuobst mit jahrhundertealten Bäumen auch ein Wildgehege beheimatet. Unterschiedliche Hühnerrassen die absolut frei, sprich ohne Zaun, sich bewegen können, dazu ein ordentlicher Gemüsegarten sorgen für guten und schmackhafte Zutaten für die heimische Küche.</p>
        <p>Es mag ein Fleckchen Erde sein, mit dem Gott es besonders gut gemeint haben muss: grüne, saftige Wiesen, blühende Obstbäume, schützend umrahmt von den Chiemgauer Bergen und den sanften Hügeln des Voralpenlandes – und inmitten dieser beruhigend ländlichen Idylle liegt der Guggenbichler Hof.</p>
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
