import React from 'react'
import Header from '../src/components/general/header'

export default function Chiemsee() {

  const header = {
    path: '/images/headers/teal-25-small.jpg',
    pathxs: '/images/headers/teal-25-small.jpg',
    pathsm: '/images/headers/teal-50-small.jpg',
    pathmd: '/images/headers/teal-50-small.jpg',
    pathlg: '/images/headers/teal-50-medium.jpg',
    pathxl: '/images/headers/teal-50-large1.jpg',
    path2xl: '/images/headers/teal-50-large3.jpg',
    title: 'Chiemsee & Chiemgau',
 
  }
  return (
    <div>
      <Header header={header} />
      <section className="py-20">Unser Wacholderschnaps wird in der seit 1892 bestehenden Edelbrandmanufaktur
Guggenbichler in traditioneller Handarbeit mit handverlesenen Zutaten hergestellt.</section>
    </div>
  )
}
