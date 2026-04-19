import { useState } from "react";

import "./PricesPage.css"

const PricesPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const prices = [
        {
            id: 1,
            title: "Общее наименование",
            details: [
                { name: "Наименование 1", price: "100 000 сум" },
                { name: "Наименование 2", price: "150 000 сум" },
                { name: "Наименование 3", price: "200 000 sum" },
            ],
        },
        {
            id: 2,
            title: "Общее наименование",
            details: [
                { name: "Наименование 1", price: "100 000 сум" },
                { name: "Наименование 2", price: "150 000 сум" },
                { name: "Наименование 3", price: "200 000 sum" },
            ],
        },
        {
            id: 3,
            title: "Общее наименование",
            details: [
                { name: "Наименование 1", price: "100 000 сум" },
                { name: "Наименование 2", price: "150 000 сум" },
                { name: "Наименование 3", price: "200 000 sum" },
            ],
        },
        {
            id: 4,
            title: "Общее наименование",
            details: [
                { name: "Наименование 1", price: "100 000 сум" },
                { name: "Наименование 2", price: "150 000 сум" },
                { name: "Наименование 3", price: "200 000 sum" },
            ],
        },
        {
            id: 5,
            title: "Общее наименование",
            details: [
                { name: "Наименование 1", price: "100 000 сум" },
                { name: "Наименование 2", price: "150 000 сум" },
                { name: "Наименование 3", price: "200 000 sum" },
            ],
        },
    ];

    const onToggle = (id) => {
        setIsOpen(isOpen === id ? null : id)
    }
    return (
        <section className="pricesPage">
            <h1 className="title_pages__name">Цены</h1>
            <div className="prices_content">
                {prices.map(item => (
                    <div className="price__content" key={item.id}>
                        <div className="price___header">
                            <p>{item.title}</p>
                            <button className={`price__btn ${isOpen ? "active" : "price__btn"}`} onClick={() => onToggle(item.id)}>{isOpen===item.id ? "Скрыть данные" : "Смотреть данные"}</button>
                        </div>
                        {isOpen === item.id && (
                            <div className="detail_body">
                                {item.details.map(detail => (
                                    <div key={item}>
                                        <p>{detail.name}</p>
                                        <p>{detail.price}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PricesPage;
