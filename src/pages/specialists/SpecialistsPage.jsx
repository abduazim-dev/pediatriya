import img from "../../assets/doctor.png"
import img2 from "../../assets/home6.png"

import "./SpecialistsPage.css"

const SpecialistsPage = () => {
    const specialists = [
        { staj: 10, img: img },
        { staj: 15, img: img2 },
        { staj: 10, img: img },
        { staj: 15, img: img2 },
        { staj: 10, img: img },
        { staj: 15, img: img2 },
        { staj: 10, img: img },
        { staj: 15, img: img2 },
    ]
    return (
        <section className="specialists">
            <h2 className="title_pages__name">Специалисты</h2>
            <div className="specialists_page__content">
                {specialists.map((item, id) => (
                    <div className="specialists_content__specialist" key={id}>
                        <div className="specialists__img__content" style={{ backgroundImage: `url(${item.img})` }}>
                            <div>
                                Стаж {item.staj} лет
                            </div>
                        </div>
                        <div className="specialists__descr">
                            <p><b>Имя Фамилия</b></p>
                            <p>Имя Фамилия</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SpecialistsPage