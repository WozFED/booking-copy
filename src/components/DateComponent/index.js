import React, {useState} from 'react'
import { Icon } from '@iconify/react'
import Calendar from 'react-calendar'

const DateComponent = () =>{
    
    const [showCalendar, setShowCalendar] = useState(false)
    const [rangerSelect, setRangerSelect] = useState(false)
    const [test, setTest] = useState([new Date()])
    const [dataStart, setDataStart] = useState(new Date())
    const [dataEnd, setDataEnd] = useState(new Date())
    const calendarF = (date) =>{
      setDataStart(date)
      setTest([...test, date[0]])
    }
   
    const calendarOptions = () =>{
      setShowCalendar(true)
      setRangerSelect(true)
    }

    console.log(test)
    return (
        <div className="date">
                    <div
                      className="date__wrapper"
                      onClick={() => calendarOptions()}
                    >
                      <p>Od</p>
                      <div className="date__input"
                      >
                        <Icon icon="bx:bx-calendar" />
                        <span>{test[0].getDate()}</span>
                        {/* <span>{dataStart.toLocaleString('default', { month: 'long' })}</span>
                        <span>{dataStart.getFullYear()}</span> */}
                      </div>
                    </div>
                    <div
                      className="date__wrapper"
                      onClick={() => setShowCalendar()}
                    >
                     
                        <p>Do</p>
                  
                      
                      <div className="date__input">
                        <Icon icon="bx:bx-calendar" />
                        {/* <span>{dataEnd.getDate()}</span>
                        <span>{dataEnd.toLocaleString('default', { month: 'long' })}</span>
                        <span>{dataEnd.getFullYear()}</span> */}
                      </div>
                      
                    </div>
                    <div className = "date__wrapper">
                      <button className = 'button-avaiable'>Sprawdź dostępność</button>
                    </div>
                    <div className = "date__label">
                      <label><p>Pokoje</p>
                        <select>
                          <option>0</option>
                        </select>
                      </label>
                      </div>
                      <div className = "date__label">
                      <label><p>Dorośli</p>
                        <select>
                          <option>2</option>
                        </select>
                      </label>
                      </div>
                      <div className = "date__label">
                      <label><p>Dzieci</p>
                        <select>
                          <option>0</option>
                        </select>
                      </label>
                      </div>
                    
                    {showCalendar ? (
                      <div className="date-wrapper">
                        <Calendar
                          
                          className="date-calendar "
                          selectRange = {rangerSelect}
                          onChange = {(data) => calendarF(data)}
                          value = {dataStart}
                        />
                        <Calendar
                        
                          className="date-calendar to"
                          
                          
                        />
                      </div>
                    ) : null}
                  </div>
    )
}

export default DateComponent;