// Footer.jsx
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="img" />
      <p className="footer_p">Политика конфиденциальности</p>
      <p>Copyryght ©</p>
      <div className="footer-box">
        <p>По всем вопросам звоните:</p>
        <h2>8 (391) 295-09-48</h2>
      </div>
    </footer>
  );
};

export default Footer;