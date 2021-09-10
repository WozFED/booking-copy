import React from "react"

const Rules = ({ hotel }) => {
  return (
    <div className="rules">
      <div className="rules__header">
        <h3>Zasady pobytu</h3>
        <button className="button-avaiable">Zobacz dostępność </button>
        <p>
          Obiekt {hotel.name} przyjmuje życzenia specjalne – możesz je dodać w
          kolejnym kroku rezerwacji!
        </p>
      </div>
      <div className="rules__section">
        <div className="check">
          <div className="check__title">
            <p>Zameldowanie</p>
          </div>
          <div className="check__chart">
            <div>TUTAJ GODZINA</div>
          </div>
          <p>
            Przy zameldowaniu wymagane jest okazanie ważnego dowodu tożsamości
            ze zdjęciem oraz karty kredytowej
          </p>
        </div>
        <div className="check">
          <div className="check__title">
            <p>Wymeldowanie</p>
          </div>
          <div className="check__chart">
            <div>TUTAJ GODZINA</div>
          </div>
        </div>
        <div className="check">
          <div className="check__title">Odwołanie rezerwacji/przedpłata</div>
        </div>
        <div className="check">
        <div className = "check__title">Zakwaterowanie dzieci</div></div>
        <div className="check"><div className = "check__title">Ograniczenia wiekowe</div></div>
        <div className="check"><div className = "check__title">Zwierzęta</div></div>
        <div className="check"><div className = "check__title">Karty akceptowane w tym hotelu</div></div>
      </div>
    </div>
  )
}

export default Rules
