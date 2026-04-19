import "./Contacted.css"
import { useState } from "react"

const ContactedPage = () => {
    const [form, setForm] = useState({ name: "", phone: "", message: "" })
    const [sent, setSent] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        if (!form.name || !form.phone) return
        setSent(true)
        setForm({ name: "", phone: "", message: "" })
        setTimeout(() => setSent(false), 4000)
    }

    return (
        <section className="contactedPage">
            <div className="contactedPage__inner">
                <h1 className="contactedPage__title">Контакты</h1>

                <div className="contactedPage__form">
                    <h2>Оставить заявку</h2>
                    <p>Заполните форму, и мы свяжемся с вами в течение 30 минут</p>

                    <div className="contactedForm__group">
                        <label>Ваше имя *</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Иван Иванов"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="contactedForm__group">
                        <label>Номер телефона *</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+998 (___) ___-__-__"
                            value={form.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="contactedForm__group">
                        <label>Сообщение</label>
                        <textarea
                            name="message"
                            placeholder="Опишите вашу проблему или вопрос..."
                            rows={4}
                            value={form.message}
                            onChange={handleChange}
                        />
                    </div>

                    {sent && (
                        <div className="contactedForm__success">
                            ✓ Заявка отправлена! Мы скоро свяжемся с вами.
                        </div>
                    )}

                    <button className="contactedForm__btn" onClick={handleSubmit}>
                        Отправить заявку
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ContactedPage