import React from 'react'
import { Icon } from '@iconify/react'
import DateComponent from '../DateComponent'
const Information = ({hotel}) =>{

    return (
    <div className = "information">
    <div className="information__booking">
                  <div>
                    <Icon icon="jam:padlock-open-f" />
                  </div>
                  <div>
                    <h4>Zaklep sobie korzystną ofertę na nadchodzący wyjazd</h4>
                    <p>
                      Otrzymaj natychmiastowe potwierdzenie i możliwość
                      BEZPŁATNEGO odwołania rezerwacji większości pokoi!
                    </p>
                  </div>
                </div>
                <div className="information__covid">
                  <div>
                    <Icon icon="clarity:info-standard-line" />
                  </div>
                  <div>
                    <p>
                      Od 6 kwietnia 2020 roku zasady odwołania dokonanych
                      rezerwacji będą obowiązywać bez względu na koronawirusa.
                      Zalecamy rezerwację opcji z bezpłatnym odwołaniem w razie,
                      gdyby Twoje plany musiały ulec zmianie. Dowiedz się więcej
                    </p>
                  </div>
                </div>
                <div className="information__availability">
                  <h2>Dostępność</h2>
                  <div>
                    <Icon icon="el:ok-sign" />
                    <p>
                      <i>Wyrównyjemy ceny</i>
                    </p>
                  </div>

                  {/* TU TRZEBA ZROBIĆ HOOVERA */}
                  {false ? (
                    <div className="availability">
                      Wyrównyjemy ceny dsdasdasdasdsa
                    </div>
                  ) : null}
                </div>
                <div className="information__date">
                  <h4>Kiedy chcesz się zatrzymać w obiekcie {hotel.name}?</h4>
                  <DateComponent />
                </div></div>
    )
    
}

export default Information