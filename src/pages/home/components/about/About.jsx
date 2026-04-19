import xola from "../../../../assets/home6.png";
import aboutImg from "../../../../assets/about1.png"

import "./About.css"
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <section className="about">
            <h1 className="title">О клинике</h1>
            <div className="about__content">
                <div className="about__images">
                    <img src={aboutImg} alt="about" className="about__img" />
                    <img src={xola} alt="img" className="about__img" />
                    <div className="about__decor">
                        <h2>Директор клиники</h2>
                        <h2 className="about___decor_h2">Марина Александровна</h2>
                        <p>Перейти к карточке врача &gt; &gt;</p>
                    </div>
                </div>
                <div className="about__descr">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />  <br />

                        Vivamus ut mollis risus, vitae auctor urna. Cras bibendum mi in tellus gravida, et mattis nulla luctus. Aenean mattis nunc ac gravida pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. <br />  <br />

                        Pellentesque malesuada fermentum magna eget laoreet. Etiam fringilla orci a consequat gravida. Mauris lobortis quis mauris vitae posuere. <br />  <br />

                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <br />  <br />

                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <br />  <br />

                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. <br />  <br />

                        Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum
                        et dolorum fuga. Et harum quidem rerum...</p>

                        <div className="about___more">
                            <div className="about___line"></div>
                            <p><b>Etiam fringilla orci a consequat gravida. Mauris lobortis quis.</b></p>
                            <button><NavLink className="navLink_about" to="/doctorCard">Читать больше</NavLink></button>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default About