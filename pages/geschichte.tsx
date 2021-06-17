import React from 'react'
import Header from '../src/components/general/header'
import TeamMember from '../src/components/teamchiemsee/teamMember'
import {team} from '../src/utils/teamconfig'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default function Geschichte() {
  const header = {
    path: '/images/backgroundheader.jpg',
    title: 'Wer, Wie, Wo, Was, Warum????',
   
  }
  return (
    <div>
      <Header header={header} />
      <section>
        <p>Die Idee vom Chiemsee Gin entstand 2020. Zwei Gin-Liebhaber und Tüftler, Daniel
          &amp; Daniel, haben sich zum Ziel gesetzt, Chiemgaus besten Gin zu kreieren. Der
          Traum, einen regional hergestellten Premium Gin ins Leben zu rufen und dabei auch
          noch etwas Gutes für den Naturschutz unserer Heimat zu tun, trieb die beiden an.
          Nur beste, handverlesene Zutaten waren für den Chiemsee Gin gut genug. Nach
          monatelangem Tüfteln, Probieren und vielen schlaflosen Nächten mit harter Arbeit
          konnte dieses Herzensprojekt verwirklicht werden. Unser Wacholderschnaps wird in
          der seit 1892 bestehenden Edelbrandmanufaktur Guggenbichler in traditioneller
          Handarbeit mit handverlesenen Zutaten hergestellt. Das Ergebnis: Ein Gin so
          einzigartig wie seine Heimat.
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
