import React from 'react'

const Rules = ({hotel}) =>{
    return (
        <div className = "rules">
            <div className = "rules__header">
                <h3>Zasady pobytu</h3>
                <button className = "button-avaiable">Zobacz dostępność </button>
                <p>Obiekt {hotel.name} przyjmuje życzenia specjalne – możesz je dodać w kolejnym kroku rezerwacji!</p>
            </div>

        </div>
    )
}

export default Rules