import home6 from "../../../../assets//home6.png"; // Pediatr rasmi
import awardIcon from "../../../../assets//award.png"; // Kubok belgisi
import palmIcon from "../../../../assets//palm.png"; // Palma belgisi
import decorLeft from "../../../../assets//lion.png"; // Chapdagi dekor
import decorRight from "../../../../assets//monkey.png"; // O'ngdagi dekor

import "./Hero.css"
import { NavLink } from "react-router-dom";

const Hero = () => {
    return (
        <div>
            <header>
                <div className="img-fth">
                    <img src={decorLeft} alt="img" />
                </div>

                <div className="home-fth">
                    <img src={home6} alt="img" />
                </div>

                <div className="home-fth1">
                    <h1>Приём педиатра</h1>

                    <p className="lorem">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>

                    <div className="home-fth3">
                        <img src={awardIcon} alt="img" />

                        <p>
                            <b>Лучшая</b> клиника по версии Комсомольской правды
                        </p>
                    </div>
                    <div className="home-fth4">
                        <button className="btn"><NavLink className="navLink_home" to="/information">Узнать больше</NavLink></button>
                        <img src={palmIcon} alt="img" />
                        <div className="home-fth5">
                            <div>&lt;</div>
                            <div>&gt;</div>
                        </div>
                    </div>
                    <div className="home-chiziq"></div>
                    <div className="home-shadow"></div>
                </div>
                <img src={decorRight} alt="img" className="monkey" />
            </header>;
        </div>
    )
}

export default Hero
