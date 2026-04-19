import React from "react";
import { Link, NavLink } from "react-router-dom";
import clinicImg from "../../assets/oKlink.png"; // o'z rasmingizni qo'ying
import directorImg from "../../assets/home6.png"; // o'z rasmingizni qo'ying
import "./InformationPage.css";

const InformationPage = () => {
    return (
        <div className="about-page">
            <h1 className="about-title">О клинике</h1>

            {/* Klinika rasmi */}
            <div className="about-clinic-img">
                <img src={clinicImg} alt="Клиника" />
            </div>

            {/* Matn qismi */}
            <div className="about-body">
                {/* Chap matn */}
                <div className="about-text">
                    <p>
                        Vivamus ut mollis risus, vitae auctor urna. Cras bibendum mi in tellus gravida,
                        et mattis nulla luctus. Aenean mattis nunc ac gravida pretium. Interdum et
                        malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                    <p>
                        Pellentesque malesuada fermentum magna eget laoreet. Etiam fringilla orci a
                        consequat gravida. Mauris lobortis quis mauris vitae posuere.
                    </p>
                    <p>
                        <strong>Duis sapien purus, gravida vitae eleifend non, aliquam id nibh.</strong>
                    </p>
                    <p>
                        Morbi a aliquet mauris. Cras faucibus arcu ut convallis cursus. Vivamus
                        molestie id odio quis volutpat.
                    </p>
                    <p>
                        <b>1)</b> Phasellus sodales ipsum non ligula volutpat fringilla. Curabitur
                        tristique maximus ornare. Pellentesque sollicitudin dolor id mollis malesuada.
                    </p>
                    <p>
                        <b>2)</b> Donec posuere purus nec libero sodales tincidunt. Nunc elementum
                        tortor eget sollicitudin viverra.
                    </p>
                    <p>
                        <b>3)</b> Phasellus auctor cursus ipsum, non maximus tortor molestie eu.
                        Phasellus lorem magna, convallis sagittis ligula ac, sollicitudin ultrices eros.
                    </p>
                    <p>
                        <em>Nullam ac faucibus libero, eu euismod metus.</em>
                    </p>
                </div>

                {/* O'ng — direktor kartasi */}
                <div className="about-director">
                    <img src={directorImg} alt="Директор" />
                    <div className="specialists__descr">
                        <p><b>Директор клиники</b></p>
                        <p>Марина Александровна</p>
                        <NavLink to="/reviews" className="nav-link2">Перейти к карточке врача &gt; &gt;</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformationPage;