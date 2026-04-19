import { NavLink } from "react-router-dom"
import contactImg from "../../assets/contactIMg.png"

import "./ContactsPage.css"
const ContactsPage = () => {
    return (
        <section className='contactsPage'>
            <div>
                <h2>Контакты:</h2>
                <p><b>Адрес:</b> ул. Чернышевского 75а</p>
                <p><b>График работы:</b> с 8:00 до 20:00</p>
                <p><b>Телефон:</b> 8 (391) 295-09-48</p>
                <p><b>Email:</b> detdoc24@yandex.ru</p>
                <h2>Как добраться:</h2>
                <p>1 мин от остановки “Детский сад №49”</p>
                <p>2 мин от остановки "ул. Дмитрия Мартынова" </p>
                <p>Автобусные маршруты 6, 11, 21, 49, 88</p>
                <button><NavLink to="/contacted">Связаться с нами</NavLink></button>
            </div>
            <img src={contactImg} alt="img" />
        </section>
    )
}

export default ContactsPage