import React, { Fragment } from 'react';
// import Header3 from '../../components/header/Header';
import Navbar from '../../components/header/navbar';
import Hero from '../../components/hero/hero';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import About from '../../components/about/about';
import PolicySection from '../../components/PolicySection/PolicySection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import TeamSection from '../../components/TeamSection/TeamSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import WhyChooseUs from '../../components/about/WhyChooseUs';

import WhatWe from '../../components/about/Whatwe';
import WeServe from '../../components/about/Weserve';
import Ours from '../../components/about/ours';
import MainNavbar from '../../components/header/MainHeader';


const HomePage = () => {

    return (
        <Fragment>
            <div>
                {/* <Header3 /> */}
                {/* <Navbar /> */}
                <MainNavbar />
                <main className="page_content">
                    <Hero />
                    {/* <FeaturesSection /> */}
                     <About />
                    <WhatWe />
                    <ServiceSection />
                    <WeServe />
                    {/* <FaqSection /> */}
                   <ProjectSection />
                    <Ours />
                    {/* <PolicySection /> */}
                    
                    
                    {/* <Testimonial /> */}
                    {/* <TeamSection /> */}
                    <BlogSection />
                    {/* <CtaSection /> */}
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage;