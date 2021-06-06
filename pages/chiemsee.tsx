import React from 'react'
import Header from '../src/components/general/header'

export default function Chiemsee() {

  const header = {
    path: '/images/chiemseebackground.jpg',
    title: 'Heimat, Chiemsee, Chiemgau, Naturschutz',
 
  }
  return (
    <div>
      <Header header={header} />
      <p>Unser Wacholderschnaps wird in der seit 1892 bestehenden Edelbrandmanufaktur
Guggenbichler in traditioneller Handarbeit mit handverlesenen Zutaten hergestellt.</p>
    </div>
  )
}
