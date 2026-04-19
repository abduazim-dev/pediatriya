import { NavLink } from "react-router-dom"
import "./News.css"

const News = () => {
    return (
        <section className="news">
            <h1 className="title">новости</h1>
            <div className="news_content new__content_style">
                <div className="new__content">
                    <div className="new__content__line"></div>
                    <div className="new__content__box">
                        <p>XX.XX.2022</p>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee.</p>
                    </div>
                </div>
                <div className="new__content">
                    <div className="new__content__line"></div>
                    <div className="new__content__box">
                        <p>XX.XX.2022</p>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee.</p>
                    </div>
                </div>
                <div className="new__content">
                    <div className="new__content__line"></div>
                    <div className="new__content__box">
                        <p>XX.XX.2022</p>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee.</p>
                    </div>
                </div>
            </div>
            <NavLink to="/news">Перейти &gt;</NavLink>
        </section>
    )
}

export default News