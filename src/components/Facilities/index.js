import React from 'react'
import { Icon } from '@iconify/react'
 
const Facilities = ({hotel}) => {
    return (
        <div className="facilities">
                <div className="facilities__header">
                  <h3>Udogodnienia w obiekcie {hotel.name}</h3>{" "}
                  <p>Świetne udogodnienia! Ocena hotel.ocena</p>
                  <button className="button-avaiable">Zobacz dostępność</button>
                </div>
                <div className="facility-popular">
                  <h4>Najpopularniejsze udogodnienia</h4>
                  <ul>
                    {hotel.popularFacilities.map((el, index) => {
                      return (
                        <li key={el + index}>
                          <Icon icon={el.icon} />
                          <p>{el.name}</p>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className="facilities__all">
                  {hotel.facilities.map((el, index) => {
                    return (
                      <div style={{ width: 33 + "%" }}>
                        <p>
                          <Icon icon={el.icon} /> {el.name}
                        </p>
                        <ul>
                          {el.facilities.map((el, index) => {
                            return (
                              <div>
                                <li>
                                  <p>{el}</p>
                                </li>

                                {el.includes("Dodatkowa opłata") ? (
                                  <div className="additional">
                                    <p>Dodatkowa opłata</p>
                                  </div>
                                ) : null}
                              </div>
                            )
                          })}
                        </ul>
                      </div>
                    )
                  })}
                </div>
                <p className="information__footer">
                  Brakuje ci jakichś in formacji? Tak/Nie
                </p>
              </div>
    )
}

export default Facilities;