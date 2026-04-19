import img from "../../assets/descr.png";

import "./GalleryPage.css"
const GalleryPage = () => {
    return (
        <section className="galleryPage">
            <h1 className="title_pages__name">Галерея</h1>
            <div>
                <img src={img} alt="img" />
                <img src={img} alt="img" />
                <img src={img} alt="img" />
                <img src={img} alt="img" />
                <img src={img} alt="img" />
                <img src={img} alt="img" />
                <img src={img} alt="img" />
                <img src={img} alt="img" />
                <img src={img} alt="img" />
                <img src={img} alt="img" />
                <img src={img} alt="img" />
            </div>
        </section>
    );
};

export default GalleryPage;
