import Loader from "react-loader-spinner"
import React from "react"

const Loading = () => {
  return (
    <div className="loader">
      <div className="loader__wrapper">
          <div className = "loader__section">
        <Loader
          type="Oval"
          color="#0071c2"
          height={30}
          width={30}
          timeout={700}
        />
        <div className="loader__description">
          <div>
            <h4>Bezpieczna rezerwacja</h4>
            <p>
              Gdy dokonujesz rezerwacji przez nasz portal. Twoje dane chronione
              są za pomocą bezpiecznego połączenia{" "}
            </p>
          </div>
        </div></div>
      </div>
    </div>
  )
}

export default Loading
