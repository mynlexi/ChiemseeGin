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
        <title>Standorte</title>
      </Helmet>
      <Header header={header} />
      <section className="py-20 flex flex-col space-y-3">
      <h3 className ="text-center mb-20 mt-0  page-title" >   Hier gibt‘s Chiemsee Gin  </h3>
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 text-center lg:w-2/3 mx-auto">
            <div className="flex flex-col">
                <p><a href={"https://www.edelbrandmanufaktur.com/"} className="hover:text-cgblue hover:underline" target="_blank" rel="noopener noreferrer">Edelbrandmanufaktur Guggenbichler</a></p>
                    <p>Oberacherting 1</p>
                        <p>83112 Frasdorf</p>


            </div>
            <div className="flex flex-col">
                <p className="text-right"><a href={"https://www.dorfladl.de/"} className="hover:text-cgblue hover:underline" target="_blank" rel="noopener noreferrer">Chieminger Dorfladl</a></p>
                <p className="text-right">Stötthamer Straße 7</p>
                    <p className="text-right"> 83339 Chieming</p>
            </div>
            <div className="flex flex-col">
                <p><a href={"https://www.facebook.com/TanteHertaChiemsee/"} className="hover:text-cgblue hover:underline" target="_blank" rel="noopener noreferrer">Tante Herta</a></p>
                <p>  Seeplatz 4</p>
            <p>  83257 Gstadt am Chiemsee</p>

            </div>
        </div>

          <h5 className="text-center pt-16">Und natürlich hier auf unserem Online-Shop!</h5>
      </section>

    </div>
  )
}
