import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useQuery, gql } from '@apollo/client';
import  {ALL_RECIPES, RECIPE_INDEX, RECIPE_INFO, RECIPE_TITLES} from '../../src/apollo_files/queries/recipes';
import { initApollo } from '../../src/apollo_files/apolloClient';
import React from 'react';
import Header from '../../src/components/general/header';
import src from "/public/images/Gin_Bewertungsbogen_01.png"
import tasting from '/public/images/Gin-Tasting-Chiemsee-Gin.jpg'



function Recipes() {
  const { loading, error, data } = useQuery(RECIPE_INDEX);
  console.log(data, error)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;
  

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-8 my-4">
   
    {data.recipes.map((recipe) => {
      
      let image = recipe.recipeImage
     
        // height
        // width
        // url
      
      return (
      <div key={recipe.id} className="col-span-2 ">
        <Link href={`gintasting/${recipe.title.split(" ").join("-")}`}><a>
          <div className="flex space-x-5 flex-col justify-around  ">
            <div className="w-36 mx-auto">
              <Image src={image.url} height={image.height} width={image.width} layout="responsive" className="rounded-full" alt="" />
            </div>
            <div >
            
            <p className="text-center">{recipe.title}</p>
            
          
     
              
           </div>
          </div>
          </a></Link>
      </div>
      
      
      )
    })}
    </div>
    ) 
}



export default function RecipeMain() {
  
  const header = {
    path: '/images/headers/blue50small-crop.jpg',
    pathxs: '/images/headers/blue50small-crop.jpg',
    pathsm: '/images/headers/blue50small-crop.jpg',
    pathmd: '/images/headers/blue50small-crop.jpg',
    pathlg: '/images/headers/blue50middle-crop.jpg',
    pathxl: '/images/headers/bluelarge-crop.jpg',
    path2xl: '/images/headers/bluesuper-crop.jpeg'
  
   
  }
  

 
  return (
    <div className="min-h-screen">
      <Head>
        <title>Tasting & Besichtigung | Chiemsee Gin</title>
     
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header={header} />
        <section className="flex flex-col  pt-16 space-y-3">
            <h3 className ="text-center mb-10 mt-0  page-title" >Tasting & Besichtigung</h3>
        </section>

        <section className={"flex flex-col  pt-16 space-y-3 mb-20"}>

                <h5 className ="text-center mb-20 mt-0 ">Gin-Verkostung & Besichtigung - Eintauchen in die Welt des Gins</h5>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 my-8'>
                    <div className='hover:w-full w-11/12 relative my-auto text-transparent hover:text-black hidden transform fadeup-enter-done mx-auto'>
                        <Image src={tasting} width={3464} height={2309} layout="responsive"  alt=""/>
                    </div>
                    <div className='xl:border-l border-gray-700 md:pl-12 hidden my-auto not-justify fadedown-enter-done'>
                        <ul className="align-middle my-auto list-disc">
                            <li>
                                Besichtigung der Brennerei mit Erklärung zur Geschichte auf dem Hof.
                            </li>
                            <li>
                                Erklärung zur Herstellung von Gin und Edelbränden, Hintergrundwissen zur Sensorik für die Verkostung.
                            </li>
                            <li>
                                Eine ausgiebige Gin-Verkostung in unserem Destillerie-Show-Room. Im Mittelpunkt steht der Chiemsee Gin sowie drei weitere Ginsorten aus unserer Edelbrandmanufaktur. Dazu bieten wir hochwertiges Tonic Water und verschiedene Toppings an.
                            </li>
                            <li>
                                Zudem bieten wir noch 1-2 weitere feine Chiemgauer Schnapsspezialitäten an.
                            </li>
                            <li>
                                Serviert wird eine zünftige bayerische Brotzeit mit Speck, Hirschwürstel, einer Auswahl verschiedener Käsesorten sowie frisches Bauernbrot.
                            </li>
                            <li>
                                Die Verkostung lasst ihr bei gemütlichem Beisammensein mit einer reichlichen Auswahl verschiedener Getränke ausklingen.
                            </li>
                            <li>
                                Sonderwünsche nach Vereinbarung
                            </li>
                            <li>
                                Dauer: 3-3,5 Stunden
                            </li>
                            <li>
                                Ab 5 Personen
                            </li>
                            <li>
                                Preis pro Person: 89,00 €
                            </li>
                            <li>Stornierung bis 5 Werktage vor Termin kostenfrei. Bei kurzfristiger Stornierung fallen 50% Stornierungsgebühr an.</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col  pt-4 space-y-3 w-3/4 mx-auto'>
                    <p>Unser Angebot findest du <Link href={"/Chiemsee-Gin_Verkostung_Besichtigung.pdf"}><a   target="_blank"
                                                         rel="noopener noreferrer" className='text-cgblue font-bold hover:underline'>hier als PDF</a></Link>.</p>
                <p>Senden Sie eine Buchungsanfrage über unser <Link href={"/kontakt"}>
                    <a   target="_blank" rel="noopener noreferrer" className='text-cgblue font-bold hover:underline'>
                        Kontaktformular </a></Link> mit ihrer gewünschten Personenanzahl und ihrem Wunschdatum.</p>
                </div>


        </section>


        <section className="flex flex-col  pt-16 space-y-3">
            <h5 className ="text-center mb-20 mt-0 ">Home Tasting & Rezepte</h5>
        </section>
        <section className="grid grid-cols-6 md:grid-cols-12 pyz-4 mx-auto w-full md:w-5/6 lg:w-3/4 ">
            <div className="px-12 md:px-10 lg:px-20 my-auto col-span-6" >
                <Link href="/Gin_Tasting_Guide_und_Bewertungsbogen_Chiemsee_Gin.pdf" passHref>
                    <Image src={src} width={617} height={864} layout="responsive"  alt=""/>
                </Link>
            </div>
            <div className="p-5 mx-auto flex flex-col justify-items-center my-auto col-span-6 space-y-1.5">
                <p>Hol dir unseren Gin Tasting Guide 	&amp; Bewertungsbogen für das perfekte Gin Tasting.</p>
                <Link href="/Gin_Tasting_Guide_und_Bewertungsbogen_Chiemsee_Gin.pdf">
                <a className="text-cgblue font-bold hover:underline" target="_blank"
                   rel="noopener noreferrer">
                    Hier als PDF
                </a>
            </Link>
            </div>

        </section>


        <section className="flex flex-col pb-20 pt-16 space-y-3">
            <p>Gin ist Kunst. Gin ist unglaublich vielfältig – mit unseren bayerischen Rezepten wollen wir in die facettenreiche Welt des Gins einladen.</p>
            <p>Das Mischverhältnis von Gin zu Tonic Water kann zwischen 1:1 und 1:4 variieren. Wir schreiben bei unseren Rezepten bewusst keine Mengenangabe für das Tonic Water. Warum? Weil jeder seinen Gin gerne anders trinkt. Der eine mag’s etwas stärker, der andere etwas leichter. Die Menge des Tonic Waters liegt also ganz bei Dir – hier gibt es kein <i>richtig </i>oder <i>falsch</i>. Am besten mit etwas weniger Tonic Water starten und bei Bedarf weiter auffüllen.</p>
            <p>Wir lieben Gin Tonic schlicht. Premium Gin + Premium Tonic Water + passendes Topping. Fertig. Mit unseren chiemgauer Rezepten wollen wir jedoch etwas Inspiration geben, wie facettenreich Gin sein kann.</p>




        </section>
      <section>
        <Recipes />
      </section>


    </div>
  )
}
