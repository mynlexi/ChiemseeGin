import React from "react";
import {Helmet} from "react-helmet";
import Header from "../src/components/general/header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import src from "/public/images/Gin_Bewertungsbogen_01.png"
import tasting from '/public/images/Gin-Tasting-Chiemsee-Gin.jpg'

export default function  Gintasting(){
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
            <div className="min-h-screen">

                <section className="flex flex-col  pt-16 space-y-3">
                    <h3 className ="text-center mb-10 mt-0  page-title" >Gin Tasting & Besichtigung im Chiemgau</h3>
                </section>

                <section className={"flex flex-col  pt-16 space-y-3 mb-20"}>

                    <h5 className ="text-center mb-20 mt-0 "> Bayerische Gin-Verkostung & Besichtigung – Eintauchen in die Welt des Gins</h5>
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
                    <h5 className ="text-center mb-20 mt-0 ">Home Tasting</h5>
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
            </div>
        </div>
            )
}