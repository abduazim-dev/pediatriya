import React, { useState, useRef, useEffect } from "react";
import "./Nav.css";
import logo from "../../assets/logo.png";
import { MdLocationOn, MdAccessTime, MdPhone } from "react-icons/md";
import { NavLink } from "react-router-dom";

const services = [
    { id: 0, name: "Терапевт", slug: "terapevt" },
    { id: 1, name: "Педиатр", slug: "pediatr" },
    { id: 2, name: "Невролог", slug: "nevrolog" },
    { id: 3, name: "Кардиолог", slug: "kardiolog" },
    { id: 4, name: "Эндокринолог", slug: "endokrinolog" },
    { id: 5, name: "ЛОР", slug: "lor" },
    { id: 6, name: "Ортопед / Травматолог", slug: "ortoped" },
];

const Nav = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const isServicesActive = location.pathname.startsWith("/services");

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div>
            <nav>
                <div className="nav-fth1">
                    <img src={logo} alt="logo" />
                    <div>
                        <MdLocationOn color="blue" size="24px" />
                        <p>ул. Чернышевского 75а</p>
                    </div>
                    <div>
                        <MdAccessTime color="blue" size="24px" />
                        <p>8.00 - 20.00</p>
                    </div>
                    <div>
                        <MdPhone color="blue" size="24px" />
                        <p>8 (391) 295-09-48</p>
                    </div>
                    <button><NavLink className="nav_link" to="/login">Онлайн-запись</NavLink></button>
                </div>

                <div className="nav-fth2">
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/prices">Цены</NavLink>

                    {/* Услуги dropdown */}
                    <div ref={ref} className="nav-dropdown-wrapper">
                        <p
                            className={`nav-dropdown-trigger ${open || isServicesActive ? "active" : ""}`}
                            onClick={() => setOpen((v) => !v)}
                        >
                            Услуги
                            <svg
                                className={`nav-chevron ${open ? "open" : ""}`}
                                width="12" height="12" viewBox="0 0 12 12" fill="none"
                            >
                                <path d="M2 4L6 8L10 4" stroke="currentColor"
                                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </p>

                        <div className={`nav-dropdown ${open ? "nav-dropdown-open" : ""}`}>
                            {services.map((item) => (
                                <NavLink
                                    key={item.id}
                                    to={`/services/${item.slug}`}
                                    className={({ isActive }) =>
                                        `nav-dropdown-item${isActive ? " active" : ""}`
                                    }
                                    onClick={() => setOpen(false)}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <NavLink to="/specialists">Специалисты</NavLink>
                    <NavLink to="/contacts">Контакты</NavLink>
                    <NavLink to="/information">Информация</NavLink>
                    <NavLink to="/reviews">Отзывы</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Nav;