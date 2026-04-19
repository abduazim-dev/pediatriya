import location from "../../../../assets/location.png"
import korik from "../../../../assets/korik.png"
import descr from "../../../../assets/descr.png"
import "./Location.css"
const Location = () => {
  return (
    <section className="location">
        <h1 className='title'>Где мы находимся</h1>
        <p>г. Красноярск, ул. Чернышевского 75а. <br />
        E-mail: <b>detdoc24@yandex.ru</b></p>
        <div className="location-inner">
            <img src={location} alt="img" className="location_img" />
            <div className="location-images">
                <img src={korik} alt="img" />
                <img src={descr} alt="img" />
            </div>
        </div>
    </section>
  )
}

export default Location