import { NavLink } from "react-router-dom"
import descr from "../../../../assets/descr.png"

import "./Gallery.css"
import GalleryPage from "../../../galleryPage/GalleryPage"

const Gallery = () => {
    return (
        <section className="gallery">
            <h1 className="title">Галерея</h1>
            <div className="gallery_inner">
                <div className="gallery_images">
                    <img src={descr} alt="img" />
                    <img src={descr} alt="img" />
                    <img src={descr} alt="img" />
                </div>
                <div className="gallery_card">
                    <button className="swiper_btn">&lt;</button>
                    <NavLink to="/gallery">Перейти &gt;</NavLink>
                    <button className="swiper_btn">&gt;</button>
                </div>
            </div>
        </section>
    )
}

export default Gallery