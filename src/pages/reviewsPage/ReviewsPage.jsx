import { NavLink } from "react-router-dom"
import reviews1 from "../../assets/reviews1.png"
import reviews2 from "../../assets/reviews2.png"
import reviews3 from "../../assets/reviews3.png"

import "./ReviewsPage.css"

const ReviewsPage = () => {
    const reviews = [
        { name: "Марина Уфимцева", company: "ProDoctorov", img: reviews1, descr: "Узнала от своей знакомой по интернету, что есть такая хорошая клиника для деток. Та женщина подсказала мне конкретных специалистов..." },
        { name: "Ольга Фролова", company: "2gis", img: reviews2, descr: "Была на приеме у Савчук Н. А. Прекрасный Доктор, очень внимательно провела осмотр, всё объяснила по моему состоянию..." },
        { name: "Олег Канашкин", company: "Flamp", img: reviews3, descr: "Мы клинику выбрали потому, что здесь работают врачи-профессионалы с большой буквы! Мне вылечили очень тяжелый бронхит..." },
        { name: "Марина Уфимцева", company: "ProDoctorov", img: reviews1, descr: "Узнала от своей знакомой по интернету, что есть такая хорошая клиника для деток. Та женщина подсказала мне конкретных специалистов..." },
        { name: "Ольга Фролова", company: "2gis", img: reviews2, descr: "Была на приеме у Савчук Н. А. Прекрасный Доктор, очень внимательно провела осмотр, всё объяснила по моему состоянию..." },
        { name: "Олег Канашкин", company: "Flamp", img: reviews3, descr: "Мы клинику выбрали потому, что здесь работают врачи-профессионалы с большой буквы! Мне вылечили очень тяжелый бронхит..." }
    ]
    return (
        <section className="reviewsPage">
            <h1 className="title_pages__name">Отзывы</h1>
            <div className="reviews_content">
                {reviews.map((item, id) => (
                    <div className="review__content" key={id}>
                        <div>
                            <div className="review__content___names">
                                <h2>{item.name}</h2>
                                <h2 className="company___name">{item.company}</h2>
                                <img src={item.img} alt="img" />
                            </div>
                            <p>{item.descr}</p>
                        </div>
                        <button><NavLink className="navLink__review" to="/reviews">Перейти &gt;</NavLink></button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ReviewsPage