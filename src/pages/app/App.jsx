import React from "react";
import "./App.css";
import Home from "../home/Home";

import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import SpecialistsPage from "../specialists/SpecialistsPage";
import ContactsPage from "../contactsPage/ContactsPage";
import GalleryPage from "../galleryPage/GalleryPage";
import ReviewsPage from "../reviewsPage/ReviewsPage";
import NewsPage from "../newsPage/NewsPage";
import PricesPage from "../pricesPage/PricesPage";
import InformationPage from "../informationPage/InformationPage";
import DoctorCard from "../doctorCard/DoctorCard";
import ServicesPage from "../servicesPage/ServicesPage";
import Login from "../../components/login/Login";
import ContactedPage from "../contactedPage/Contacted";

const App = () => {
    return (
        <div className="App">
            <Nav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/specialists" element={<SpecialistsPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/prices" element={<PricesPage />} />
                <Route path="/information" element={<InformationPage />} />
                <Route path="/doctorCard" element={<DoctorCard />} />
                <Route path="/services/:servicesID" element={<ServicesPage />} />
                <Route path="/contacted" element={<ContactedPage />} />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;