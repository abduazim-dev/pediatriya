import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [visible, setVisible] = useState(true)

    const handleSubmit = () => {
        if (!name.trim() || !phone.trim()) {
            setError(true)
            return;
        }
        setError(false)
        setSubmitted(true)
        setTimeout(() => {
            navigate("/")
        }, 5000);
    }

    if (!visible) return null;
    return (
        <div className="overlay">
            <div className="modal">
                <button className="close-btn" onClick={() => setVisible(false)}>✕</button>

                <h2 className="title">Мы ждём вас!</h2>
                {submitted ? (
                    <div className="success-box">
                        <div className="check-circle">✓</div>
                        <p className="success-title">Запись подтверждена!</p>
                        <p className="success-sub">Ждём вас в четверг 22.01.2022 в 12:30</p>
                    </div>
                ) : (
                    <>
                        <div className="field">
                            <label>Специализация врача</label>
                            <select className="filled">
                                <option>Терапевт</option>
                                <option>Педиатр</option>
                                <option>Кардиолог</option>
                                <option>Невролог</option>
                            </select>
                        </div>

                        <div className="field">
                            <label>Врач</label>
                            <select className="filled">
                                <option>Умарова Нигора</option>
                                <option>Ахмедов Санжар</option>
                                <option>Петров Сергей</option>
                                <option>Филиппова Елизавета</option>
                            </select>
                        </div>

                        <div className="field">
                            <label>Дата и время</label>
                            <div className="date-wrapper">
                                <select className="filled">
                                    <option>Четверг 22.01.2022 в 12:30</option>
                                    <option>Четверг 22.02.2022 в 07:30</option>
                                    <option>Четверг 22.03.2022 в 14:30</option>
                                    <option>Четверг 22.04.2022 в 15:30</option>
                                </select>
                                <svg
                                    className="calendar-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#888"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="3" y="4" width="18" height="18" rx="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                            </div>
                        </div>

                        <div className="field">
                            <label>Ваши данные</label>
                            <input
                                type="text"
                                className="name-input"
                                placeholder="Имя"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <input
                                type="tel"
                                placeholder="Номер телефона"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                            {error && (
                                <p className="error-msg">
                                    Пожалуйста, заполните имя и номер телефона.
                                </p>
                            )}
                        </div>


                        <button className="submit-btn" onClick={handleSubmit}>Записаться на приём</button>
                    </>
                )}
            </div>
        </div>
    );
}