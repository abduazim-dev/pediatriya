import sct1 from "../../../../assets/sct1.png";
import sct2 from "../../../../assets/sct2.png";
import sct3 from "../../../../assets/sct3.png";
import sct4 from "../../../../assets/sct4.png";

import "./WhyUs.css"
const WhyUs = () => {
    const whyUsData = [
        {
            id: 1,
            img: sct1,
            title: "Качество",
            desc: "80% наших врачей обладают высшей или 1-й категорией",
        },
        {
            id: 2,
            img: sct2,
            title: "Анализы",
            desc: "Вы можете сдавать любые анализы, даже самые редкие",
        },
        {
            id: 3,
            img: sct3,
            title: "Программы",
            desc: "Для вашего удобства мы разработали программы медицинского обслуживания",
        },
        {
            id: 4,
            img: sct4,
            title: "На дому",
            desc: "Проводим лечение на дому, если состояние пациента не позволяет прийти в клинику",
        },
    ];
    return (
        <div className="why-us">
            <h1 className="title">Почему именно к нам?</h1>
            <div className="sct-fth">
                {whyUsData.map((item) => (
                    <div key={item.id} className="sct-box">
                        <img src={item.img} alt="img" />
                        <div className="number-box">{item.id}</div>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyUs