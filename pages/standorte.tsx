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
      <h3 className ="text-center mb-10 mt-0  page-title" >   Hier gibt‘s Chiemsee Gin  </h3>
          <h4 className='text-center text-2xl'>Ausgewählte Läden</h4>
        <div className="grid grid-cols-1 gap-y-8 gap-x-4 text-center lg:w-2/3 mx-auto">
            <div className="flex flex-col">
                <p className={"font-bold"}>Edelbrandmanufaktur Guggenbichler</p>
                    <p>Oberacherting 1</p>
                        <p>83112 Frasdorf</p>


            </div>
            <div className="flex flex-col">
                <p className="text-right font-bold">Chieminger Dorfladl</p>
                <p className="text-right">Stötthamer Straße 7</p>
                    <p className="text-right"> 83339 Chieming</p>
            </div>
            <div className="flex flex-col">
                <p className={"font-bold"}>Tante Herta</p>
                <p>  Seeplatz 4</p>
            <p>  83257 Gstadt am Chiemsee</p>
            </div>

            <div className="flex flex-col">
                <p className="text-right font-bold">Wein & Genuss Schmidtner</p>
                <p className="text-right">Fridtjof-Nansen-Straße 3</p>
                <p className="text-right"> 83301 Traunreut</p>
            </div>

            <div className="flex flex-col">
                <p className={"font-bold"}>das Garting</p>
                <p>  Westenriederstraße 16</p>
                <p>  80331 München</p>
            </div>

            <div className="flex flex-col">
                <p className="text-right font-bold">Herrfliege</p>
                <p className="text-right">Planeggerstr. 11</p>
                <p className="text-right">81241 München</p>
            </div>
        </div>
          <h4 className='text-center text-2xl pt-10'>Besondere Bars & Restaurants</h4>
          <div className="grid grid-cols-1 gap-y-8 gap-x-4 text-center lg:w-2/3 mx-auto">
              <div className="flex flex-col">
                  <p className={"font-bold"}>Raspl’s Genuss.Schmiede</p>
                  <p>Tüßlinger Str. 2</p>
                  <p>84579 Unterneukirchen</p>


              </div>
              <div className="flex flex-col">
                  <p className="text-right font-bold">Weisses Rössl</p>
                  <p className="text-right">Herrengasse 1</p>
                  <p className="text-right"> 83512 Wasserburg a. Inn</p>
              </div>

          </div>

          <h5 className="text-center pt-16">Und natürlich hier auf unserem Online-Shop!</h5>
      </section>

    </div>
  )
}
