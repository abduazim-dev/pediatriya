import React, { useState } from "react";
import { Link } from "react-router-dom";
import doctorImg from "../../assets/home6.png";
import "./DoctorCard.css";

const education = [
    { year: "1990", text: "Fusce a eros et ligula malesuada dapibus. Integer pretium." },
    { year: "1995", text: "Ut efficitur lacus molestie quam interdum, non tincidunt dolor ornare." },
    { year: "1990", text: "Fusce a eros et ligula malesuada dapibus. Integer pretium." },
    { year: "1995", text: "Ut efficitur lacus molestie quam interdum, non tincidunt dolor ornare." },
];

const qualification = [
    { year: "1990", text: "Fusce a eros et ligula malesuada dapibus. Integer pretium." },
    { year: "1995", text: "Ut efficitur lacus molestie quam interdum, non tincidunt dolor ornare." },
    { year: "1990", text: "Fusce a eros et ligula malesuada dapibus. Integer pretium." },
    { year: "1995", text: "Ut efficitur lacus molestie quam interdum, non tincidunt dolor ornare." },
    { year: "1990", text: "Fusce a eros et ligula malesuada dapibus. Integer pretium." },
    { year: "1995", text: "Ut efficitur lacus molestie quam interdum, non tincidunt dolor ornare." },
    { year: "1990", text: "Fusce a eros et ligula malesuada dapibus. Integer pretium." },
    { year: "1995", text: "Ut efficitur lacus molestie quam interdum, non tincidunt dolor ornare." },
];

const DoctorCard = () => {
    const [showAllEducation, setShowAllEducation] = useState(false);
    const [showAllQualification, setShowAllQualification] = useState(true);

    const visibleEducation = showAllEducation ? education : education.slice(0, 2);

    return (
        <div className="doctor-page">   
            {/* Yuqori qism */}
            <div className="doctor-top">
                {/* Rasm */}
                <div className="doctor-img">
                    <img src={doctorImg} alt="Врач" />
                </div>

                {/* Ma'lumotlar */}
                <div className="doctor-info">
                    <div className="doctor-info__header">
                        <div>
                            <h1 className="doctor-info__name">Имя Фамилия</h1>
                            <p className="doctor-info__position">Должность</p>
                        </div>
                        <span className="doctor-info__experience">Стаж 15 лет</span>
                    </div>

                    <p className="doctor-info__desc">
                        Nulla interdum neque orci, aliquet auctor arcu auctor sit amet. Duis id vehicula
                        nisl, justo. Praesent rhoncus nunc nulla, eget varius neque gravida in. Cras
                        interdum ac ligula eget vulputate. Suspendisse ut tristique purus. Vivamus ac
                        tellus efficitur, tincidunt lectus dictum, accumsan nulla. Fusce ac semper augue.
                        Donec ut elit ut sem finibus venenatis vitae sed eros.
                    </p>
                    <p className="doctor-info__desc">
                        Fusce a eros et ligula malesuada dapibus. Integer pretium fringilla nibh at
                        volutpat. Nulla pharetra porttitor leo eget pellentesque. In finibus, libero eget
                        mollis congue, turpis massa auctor nulla, sed pretium sem leo id neque. Aliquam
                        erat volutpat. Ut efficitur lacus molestie quam interdum, non tincidunt dolor ornare.
                    </p>

                    {/* Prodoctorov + jadval */}
                    <div className="doctor-schedule">
                        <div className="doctor-schedule__left">
                            <div className="doctor-prodoctorov">
                                <span className="pro">pro</span><span className="doctorov">doctorov</span>
                            </div>
                            <div className="doctor-reviews">
                                <span className="doctor-reviews__count">197 отзывов</span>
                                <a href="#" className="doctor-reviews__link">Читать &gt;</a>
                            </div>
                            <p className="doctor-place"><b>6 место</b> из 109 в Красноярске</p>
                        </div>

                        <div className="doctor-schedule__right">
                            <div className="doctor-dates">
                                <div className="doctor-date">
                                    <span className="doctor-date__label">24.05, ср:</span>
                                    <span className="doctor-date__time">13:00-15:00</span>
                                </div>
                                <div className="doctor-date active">
                                    <span className="doctor-date__label">25.05, чт:</span>
                                    <span className="doctor-date__time">15:00-20:00</span>
                                </div>
                                <div className="doctor-date active">
                                    <span className="doctor-date__label">26.05, пт:</span>
                                    <span className="doctor-date__time">11:00-19:00</span>
                                </div>
                            </div>
                            <button className="doctor-appointment-btn">Записаться на приём</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Образование */}
            <div className="doctor-section">
                <div className="doctor-section__header">
                    <h2>Образование врача</h2>
                    <button
                        className="doctor-section__toggle"
                        onClick={() => setShowAllEducation((v) => !v)}
                    >
                        {showAllEducation ? "Скрыть" : "Показать все"}
                        <svg
                            className={`section-chevron ${showAllEducation ? "open" : ""}`}
                            width="14" height="14" viewBox="0 0 12 12" fill="none"
                        >
                            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="doctor-table">
                    {visibleEducation.map((item, i) => (
                        <div key={i} className="doctor-table__row">
                            <span className="doctor-table__year">{item.year}</span>
                            <span className="doctor-table__text">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Повышение квалификации */}
            <div className="doctor-section">
                <div className="doctor-section__header">
                    <h2>Повышение квалификации</h2>
                    <button
                        className="doctor-section__toggle"
                        onClick={() => setShowAllQualification((v) => !v)}
                    >
                        {showAllQualification ? "Свернуть" : "Показать все"}
                        <svg
                            className={`section-chevron ${showAllQualification ? "open" : ""}`}
                            width="14" height="14" viewBox="0 0 12 12" fill="none"
                        >
                            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="doctor-table">
                    {(showAllQualification ? qualification : qualification.slice(0, 2)).map((item, i) => (
                        <div key={i} className="doctor-table__row">
                            <span className="doctor-table__year">{item.year}</span>
                            <span className="doctor-table__text">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;