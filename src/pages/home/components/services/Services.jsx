import { useState } from "react"
import "./Services.css"
import { NavLink } from "react-router-dom";

const Services = () => {
    const [active, setActive] = useState("")

    const servicesList = [
        { id: "pediatr", title: "Педиатр" },
        { id: "terapevt", title: "Терапевт" },
        { id: "lor", title: "ЛОР" },
        { id: "nevrolog", title: "Невролог" },
    ];
    return (
        <div className="services">
            <h1 className="title">Наши услуги</h1>
            <div className="services-fth">
                {servicesList.map(item => (
                    <div className="services-box" key={item.id}>
                        <div className="services-box-box">
                            <h3>{item.title}</h3>
                            <button onClick={() => setActive(`${item.id}-dom`)} className={active === `${item.id}-dom` ? "active" : ""}>Вызвать на дом</button>
                            <button onClick={() => setActive(`${item.id}-priyom`)} className={active === `${item.id}-priyom` ? "active" : ""}>Записаться на приём</button>
                        </div>
                        <div className="services-line"></div>
                    </div>
                ))}
            </div>
            <NavLink to="/services/pediatr" className="link">Смотреть все &gt;</NavLink>
        </div>
    )
}

export default Services