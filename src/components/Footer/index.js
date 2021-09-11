import React from 'react'

const Footer = () => {
    return (
      <div>
      <div className = "footer">
        <div className = "footer__contact">
          <h2>Oszczędzaj czas i pieniądze!</h2>
          <p>Zaprenumeruj nasz biuletyn, a będziemy przesyłać Ci najlepsze oferty</p>
          <div className = "footer__text">
            <input type = 'text' className ="input-text" placeholder = 'Adres mailowy'></input>
            <button className = 'button-footer'>Zaprenumeruj</button><label>
             
          <input type ='checkbox' className = 'input-checkbox'></input>
             Wyślij mi link do pobrania BEZPŁATNEJ aplikacji Booking.com!
          </label>
          
          </div>
         
        </div>
      </div>
        <div className = "sharing">
        <div className = "sharing__share">
        <button className = "button-header another share"><p>Udostępnij obiekt</p></button>

        </div>
        <div className ='sharing__options'>
          <div className = "sharing__links">
          <p>Wersja na telefon</p>
          <p>Twoje konto</p>
          <p>Wprowadzaj zmiany w rezerwacji online</p>
          <p>Skontaktuj się z obsługą klienta</p>
          <p>Zostań naszym Partnerem Afiliacyjnym</p>
          <p>Booking.com dla biznesu</p>
          </div>
        </div>
        
      </div></div>
    )
}

export default Footer;