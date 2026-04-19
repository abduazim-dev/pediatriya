import partners1 from "../../../../assets/partners1.png"
import partners2 from "../../../../assets/partners2.png"
import partners3 from "../../../../assets/partners3.png"
import partners4 from "../../../../assets/partners4.png"

import "./Partners.css"

const Partners = () => {
    return (
        <section className="partners">
            <h1 className="title">Наши партнёры</h1>
            <div className="partners__inner">
                <button className="swiper_btn_partners">&lt;</button>
                <div className="partners__card">
                    <img src={partners1} alt="img" />
                    <img src={partners2} alt="img" />
                    <img src={partners3} alt="img" />
                    <img src={partners4} alt="img" />
                </div>
                <button className="swiper_btn">&gt;</button>
            </div>
        </section>
    )
}

export default Partners