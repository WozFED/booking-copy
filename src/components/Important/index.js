import { AnchorLink } from "gatsby-plugin-anchor-links"
import React from "react"

const Important = () => {
  return (
    <div id="important" className="important">
      <div className="important__header">
        <h2>Ważne informacje</h2>
        <button className="button-avaiable">
          <AnchorLink to="#avaiable">
            <p>Zobacz dostępność</p>
          </AnchorLink>
        </button>
      </div>
      <div className="rules__section">
        <div className="rules__wrapper imp">
          <p>
            Dodatkowe łóżka i łóżeczka dziecięce oferowane są w zależności od
            dostępności.
          </p>
          <p>
            Ze względu na koronawirusa (COVID-19) upewnij się, że rezerwujesz
            ten obiekt zgodnie z wytycznymi władz lokalnych w miejscu docelowym,
            w tym między innymi dotyczącymi celu podróży i maksymalnego
            dozwolonego rozmiaru grupy.
          </p>

          <p>
            W odpowiedzi na koronawirusa (COVID-19) ten obiekt zapewnia obecnie
            dodatkowe środki bezpieczeństwa i środki sanitarne.
          </p>

          <p>
            Sprzedaż jedzenia i napojów w tym obiekcie może być ograniczona lub
            niedostępna ze względu na koronawirusa (COVID-19).
          </p>

          <p>
            W odpowiedzi na koronawirusa (COVID-19) ten obiekt podjął środki
            mające na celu ochronę gości i personelu. Niektóre usługi i
            udogodnienia mogą być niedostępne lub ograniczone.
          </p>

          <p>
            Z powodu koronawirusa (COVID-19) ten obiekt stosuje rygorystyczne
            zasady dystansu społecznego.
          </p>

          <p>
            Z powodu koronawirusa (COVID-19) noszenie maseczki jest obowiązkowe
            we wszystkich pomieszczeniach ogólnodostępnych.
          </p>

          <p>
            Prosimy o wcześniejsze poinformowanie obiektu Hilton Gdansk o
            planowanej godzinie przyjazdu. Aby to zrobić, możesz wpisać treść
            prośby w miejscu na życzenia specjalne lub skontaktować się
            bezpośrednio z obiektem, korzystając z danych kontaktowych
            widniejących w potwierdzeniu rezerwacji.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Important
