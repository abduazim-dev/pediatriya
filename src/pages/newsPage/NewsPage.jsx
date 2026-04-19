import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NewsPage.css";

const allNews = [
    { id: 1, date: "XX.XX.2021", text: "On the other hand, we denounce with righteous indignation and dislike men who are so demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee." },
    { id: 2, date: "XX.XX.2021", text: "On the other hand, we denounce with righteous indignation and dislike men who are so demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee." },
    { id: 3, date: "XX.XX.2021", text: "On the other hand, we denounce with righteous indignation and dislike men who are so demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee." },
    { id: 4, date: "XX.XX.2021", text: "On the other hand, we denounce with righteous indignation and dislike men who are so demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee." },
    { id: 5, date: "XX.XX.2021", text: "On the other hand, we denounce with righteous indignation and dislike men who are so demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee." },
    { id: 6, date: "XX.XX.2021", text: "On the other hand, we denounce with righteous indignation and dislike men who are so demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee." },
    { id: 7, date: "XX.XX.2021", text: "On the other hand, we denounce with righteous indignation and dislike men who are so demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee." },
];

const ITEMS_PER_PAGE = 3;

const NewsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(allNews.length / ITEMS_PER_PAGE);

    const currentNews = allNews.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <section className="news-page">
            <h1 className="title_pages__name">Новости</h1>

            <div className="news-list">
                {currentNews.map((item) => (
                    <div className="new__content" key={item.id}>
                        <div className="new__content__line"></div>
                        <div className="new__content__box">
                            <p>{item.date}</p>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="news-pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        className={`pagination-btn ${currentPage === page ? "active" : ""}`}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                ))}
                <button
                    className="pagination-btn"
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    &gt;
                </button>
            </div>
        </section>
    );
};

export default NewsPage;