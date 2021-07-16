import React from 'react'

function impressum() {
  return (
    <section>
      <h2>Gesetzliche Anbieterkennung:</h2>
      <div className="flex flex-col my-4">
        <div>Chiemsee Premium Gin UG (haftungsbeschränkt)</div>
        <div>Haigermooser Str. 17</div>
        <div>83349 Palling</div>
        <div>vertreten durch den Geschäftsführer Daniel Schex</div>
      </div>
      <div className="flex">Telefon: <div className="select-all ml-2"> +49 (0)175 – 571 94 27</div></div>
      <div className="flex flex-col my-4">
        <div className="flex">E-Mail: <div className="select-all ml-2"> info (at) chiemseegin.de</div></div>
        <div className="flex">USt-IdNr.: <div className="select-all ml-2">DE342398748</div></div>
        <div>eingetragen im Handelsregister des Amtsgerichtes Traunstein</div>
        <div>Handelsregisternummer HRB 29839</div>
      </div>
      <div className="my-4">
        <h3>Alternative Streitbeilegung:</h3>
        <p>Die Europäische Kommission stellt eine Plattform für die außergerichtliche Online-Streitbeilegung (OS-Plattform) bereit, aufrufbar unter <a href="https://ec.europa.eu/odr" rel="noreferrer noopener" target="_blank">https://ec.europa.eu/odr</a>.</p>
      </div>
      
    </section>

  )
}

export default impressum
