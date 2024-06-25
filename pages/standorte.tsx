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
      <section className="py-20 flex flex-col ">
      <h3 className ="text-center mb-10 mt-0  page-title" >   Hier gibt‘s Chiemsee Gin  </h3>
          <p className={"text-left lg:w-2/3 mx-auto"}>Chiemsee Gin gibt es ausschließlich in exklusiven Feinkostläden, regionalen Geschäften und Concept Stores sowie hochwertigen Lebensmittelgeschäften.
         Außerdem in erstklassigen Bars & Restaurant. </p>




          <h4 className='text-center text-2xl mt-16'>Ausgewählte Läden</h4>
        <div className="grid grid-cols-1 gap-y-8 gap-x-4 text-center lg:w-2/3 mx-auto">

            <div className="flex flex-col">
                <p className={"font-bold"}>Faires Zeug - Genuss aus der Region</p>
                <p>Hauptstr. 10</p>
                <p>83308 Trostberg</p>
            </div>


            {/*<div className="flex flex-col">*/}
            {/*    <p className={"font-bold"}>MalysLaden</p>*/}
            {/*        <p>Bahnhofstraße 24</p>*/}
            {/*            <p>83278 Traunstein</p>*/}
            {/*</div>*/}
            <div className="flex flex-col">
                <p className="text-right font-bold">Tracht & Kram</p>
                <p className="text-right">Stadtplatz 18</p>
                <p className="text-right"> 83278 Traunstein</p>
            </div>

            <div className="flex flex-col">
                <p className={"font-bold"}>Tante Herta</p>
                <p>  Seeplatz 4</p>
                <p>  83257 Gstadt am Chiemsee</p>
            </div>
            <div className="flex flex-col">
                <p className="text-right font-bold">Chieminger Dorfladl</p>
                <p className="text-right">Stötthamer Straße 7</p>
                <p className="text-right"> 83339 Chieming</p>
            </div>
            <div className="flex flex-col">
                <p className={"font-bold"}>EDEKA Summerer</p>
                <p>Bahnhofstraße 43</p>
                <p>83253 Rimsting</p>
            </div>
            <div className="flex flex-col">
                <p className="text-right font-bold">InnKaufhaus Wasserburg</p>
                <p className="text-right">Ledererzeile 1-5</p>
                <p className="text-right">83512 Wasserburg am Inn</p>
            </div>

            {/*<div className="flex flex-col">*/}
            {/*    <p className="text-right font-bold">Truchtlachinger Ladl</p>*/}
            {/*    <p className="text-right">Seeoner Str. 7</p>*/}
            {/*    <p className="text-right">83376 Seeon-Seebruck</p>*/}
            {/*</div>*/}

            <div className="flex flex-col">
                <p className={"font-bold"}>Helmut’s edles & feines
                </p>
                <p>St. Sebastian 6b</p>
                <p>84307 Eggenfelden</p>
            </div>
            <div className="flex flex-col">
                <p className="text-right font-bold">Edelbrandmanufaktur Guggenbichler</p>
                <p className="text-right">Oberacherting 1</p>
                <p className="text-right">83112 Frasdorf</p>
            </div>



            <div className="flex flex-col">
                <p className={"font-bold"}>Herrfliege</p>
                <p>  Planeggerstr. 11</p>
                <p>  81241 München</p>
            </div>



            <div className="flex flex-col">
                <p className="text-right font-bold">Andor‘s Feinkost & Geschenkladen</p>
                <p className="text-right"> Fridtjof-Nansen-Straße 3
                </p>
                <p className="text-right"> 83301 Traunreut
                </p>
            </div>

            {/*<div className="flex flex-col">*/}
            {/*    <p className={"font-bold"}>De Kramerin 3.0 - Unverpackt, Regional, Bio</p>*/}
            {/*    <p>  Baumburger Leite 38</p>*/}
            {/*    <p>  83352 Altenmarkt an der Alz</p>*/}
            {/*</div>*/}



            {/*<div className="flex flex-col">*/}
            {/*    <p className="text-right font-bold">Schwendl</p>*/}
            {/*    <p className="text-right">Trostberger Str. 134-136</p>*/}
            {/*    <p className="text-right"> 83342 Tacherting</p>*/}
            {/*</div>*/}

            <div className="flex flex-col">
                <p className={"font-bold"}>Servus.Heimat am Chiemsee
                </p>
                <p> Bernauer Str. 3
                </p>
                <p> 83209 Prien am Chiemsee
                </p>
            </div>



            <div className="flex flex-col">
                <p className="text-right font-bold">La Cantina
                </p>
                <p className="text-right">Elisabethstraße 53</p>
                <p className="text-right">80796 München</p>
            </div>


            <div className="flex flex-col">
                <p className={"font-bold"}>Fridolfinger Genussladerl
                </p>
                <p> Rupertistraße 15
                </p>
                <p> 83413 Fridolfing
                </p>
            </div>

            <div className="flex flex-col">
                <p className="text-right font-bold">Urgibl (Feinkostabteilung)
                </p>
                <p className="text-right">Riederinger Str. 2</p>
                <p className="text-right">85614 Kirchseeonn</p>
            </div>
        </div>




          <h4 className='text-center text-2xl pt-16 mb-8'>Besondere Bars & Restaurants</h4>
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


              <div className="flex flex-col">
                  <p className={"font-bold"}>El Paso Cocktails & Food</p>
                  <p>Schustergasse 11</p>
                  <p>83512 Wasserburg am Inn</p>


              </div>
              <div className="flex flex-col">
                  <p className="text-right font-bold">Coppa Brazil Restaurant & Cocktailbar</p>
                  <p className="text-right">Adlzreiterstraße 11</p>
                  <p className="text-right"> 83022 Rosenheim</p>
              </div>


              <div className="flex flex-col">
                  <p className={"font-bold"}>Oscars Bar</p>
                  <p>Adlzreiterstraße 11</p>
                  <p>83022 Rosenheim</p>
              </div>
              <div className="flex flex-col">
                  <p className="text-right font-bold">Zum Fischer am See</p>
                  <p className="text-right">Harrasser Str. 145</p>
                  <p className="text-right"> 83209 Prien am Chiemsee</p>
              </div>

              <div className="flex flex-col">
                  <p className={"font-bold"}>Landhotel Gabriele</p>
                  <p>Bründlsberggasse 14</p>
                  <p>83246 Unterwössen</p>
              </div>

          </div>

          <h5 className="text-center pt-16">Und natürlich hier auf unserem Online-Shop!</h5>
      </section>

    </div>
  )
}
