import doctor from "../../../../assets/home6.png"
import doctor2 from "../../../../assets/doctor.png"

import "./OurSpecialists.css"
import { NavLink } from "react-router-dom"

const OurSpecialists = () => {
    return (
        <section className="specialists">
            <div className="specialists_topic">
                <h1>Наши специалисты</h1>
                <div className="specialists_topic__line"></div>
                <button><NavLink to="/specialists" className="nav-link">Смотреть всех</NavLink></button>
            </div>
            <div className="specialists_content">
                <div className="specialists_content__specialist">
                    <div className="specialists__img__content" style={{ backgroundImage: `url(${doctor})` }}>
                        <div>
                            Стаж 15 лет
                        </div>
                    </div>
                    <div className="specialists__descr">
                        <p><b>Имя Фамилия</b></p>
                        <p>Имя Фамилия</p>
                    </div>
                </div>
                <div className="specialists_content__specialist">
                    <div className="specialists__img__content" style={{ backgroundImage: `url(${doctor2})` }}>
                        <div>
                            Стаж 10 лет
                        </div>
                    </div>
                    <div className="specialists__descr">
                        <p><b>Имя Фамилия</b></p>
                        <p>Имя Фамилия</p>
                    </div>
                </div>
                <div className="specialists_content__specialist">
                    <div className="specialists__img__content" style={{ backgroundImage: `url(${doctor})` }}>
                        <div>
                            Стаж 15 лет
                        </div>
                    </div>
                    <div className="specialists__descr">
                        <p><b>Имя Фамилия</b></p>
                        <p>Имя Фамилия</p>
                    </div>
                </div>
                <div className="specialists_content__specialist">
                    <div className="specialists__img__content" style={{ backgroundImage: `url(${doctor2})` }}>
                        <div>
                            Стаж 10 лет
                        </div>
                    </div>
                    <div className="specialists__descr">
                        <p><b>Имя Фамилия</b></p>
                        <p>Имя Фамилия</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurSpecialists