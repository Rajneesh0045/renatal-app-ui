import React from "react";
import Header from "../../components/Header/Header";
import RentalSearch from "../../components/RentalSearch/RentalSearch";
import './LandingPage.css';

const LandingPage = () => (
    <section className="LandingPage" id="landingPage">
        <Header/>
        <div className="LandingText">
            <h1>
                Rethink your living & renting
            </h1>
            <h2>
                Make your stay painless with us
            </h2>
        </div>
        <div>
            <RentalSearch/>
        </div>
        <img id="landingEnds" src={process.env.PUBLIC_URL+ '/img/landing.svg'} alt="landing ends here"/>
    </section>
);

export default LandingPage;