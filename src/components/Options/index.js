import React from "react"

const Options = props => {
  return (
    <div className="hotels__options">
      <div className="options">
        <div className="options__header">
          <h3>Filtruj według nasępujących kryteriów</h3>
        </div>
        <div className="options__box">
          <h4>Zdrowie i bezpieczeństwo</h4>
          <label>
            <input type="checkbox" className="checkbox"></input>
            <p>
              Obiekty z dodatkowymi środkami bezpieczeństwa i ochrony zdrowia
            </p>
          </label>
        </div>
        <div className="options__box">
          <h4>Liczba gwiazdek</h4>

          <label>
            <input
              type="checkbox"
              className="checkbox"
              onChange={() => props.inputFunction(5, 0)}
            ></input>
            <p>5 gwiazdkowy</p>
          </label>
          <label>
            <input
              type="checkbox"
              className="checkbox"
              onChange={() => props.inputFunction(4, 1)}
            ></input>
            <p>4 gwiazdkowy</p>
          </label>
          <label>
            <input
              type="checkbox"
              className="checkbox"
              onChange={() => props.inputFunction(3, 2)}
            ></input>
            <p>3 gwiazdkowy</p>
          </label>
        </div>
        <div className="options__box">
          <h4>Popularne filtry</h4>
          <label>
            <input type="checkbox" className="checkbox"></input>
            <p>kryty basen</p>
          </label>
          <label>
            <input type="checkbox" className="checkbox"></input>
            <p>wanna z hydromasażem</p>
          </label>
          <label>
            <input type="checkbox" className="checkbox"></input>
            <p>sauna</p>
          </label>
          <label>
            <input type="checkbox" className="checkbox"></input>
            <p>plaża</p>
          </label>
          <label>
            <input type="checkbox" className="checkbox"></input>
            <p>spa i centrum odnowy biologicznej</p>
          </label>
          <label>
            <input type="checkbox" className="checkbox"></input>
            <p>Znakomity: ponad 9</p>
          </label>
        </div>
        <div className="options__box">
          <h4>Rozrywki</h4>
          <label>
            <input type="checkbox" className="checkbox"></input>
            <p>piesze wycieczki</p>
          </label>
          <label>
            <input type="checkbox" className="checkbox"></input>
            <p>plac zabaw dla dzieci</p>
          </label>
          <label>
            <input type="checkbox" className="checkbox"></input>
            <p>puby</p>
          </label>
          <label>
            <input type="checkbox" className="checkbox"></input>
            <p>wycieczka lub spacer po miejscowych zabytkach</p>
          </label>
          <label>
            <input type="checkbox" className="checkbox"></input>
            <p>jazda na rowerze</p>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Options
