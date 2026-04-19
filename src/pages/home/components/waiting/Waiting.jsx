import waiting1 from "../../../../assets/waiting.png"
import waiting2 from "../../../../assets/lion.png"
import waiting3 from "../../../../assets/giraf.png"

import "./Waiting.css"

const Waiting = () => {
  return (
    <section className="waiting" style={{backgroundImage:`url(${waiting1})`}}>
        <img src={waiting2} alt="img" className="waiting__img" />
        <div>
            <h1 className="title">Мы ждём вас!</h1>
            <h2>Ваши данные</h2>
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Номер телефона" />
            <button>Записаться на приём</button>
        </div>
        <img src={waiting3} alt="img" className="waiting__img" />
    </section>
  )
}

export default Waiting