'use client';

import React, { useEffect } from 'react'
import ContactUs from '../Components/ContactUs'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import ScrollToTop from '@/Components/ScrollToTop'
import WhyChooseUs from '../Components/WhyChooseUs'
import FAQSection from '../Components/FAQs'
import NewsletterSignup from '../Components/NewsletterSignUp'
import TechPortfolio from '../Components/TechServices';
import TechStackSection from '../Components/TechStack';
import ProjectPortfolio from '../Components/ProjectPortfolio';
import ProjectStartCTA from '../Components/ProjectStartCTA';
import TechTestimonial from '../Components/TechTestimonial';






const TechnologyPage = () => {
    useEffect(() => {
        // Get the hero section element
        const heroSection = document.getElementById('hero-section');
        
        // Scroll to hero section when component mounts
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'instant' });
        }
    }, []); // Empty dependency array means this runs once when component mounts
    
    return (
        <div>
            {/* Add id to the hero section wrapper */}
            <div id="hero-section">
                <HeroSection />
            </div>
            <WhyChooseUs/>
            <TechPortfolio/>
            <TechStackSection/>
            <TechTestimonial/>
            <ProjectPortfolio/>
            <ProjectStartCTA/>
            <FAQSection/>
            <ContactUs/>
            <NewsletterSignup/>
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}

export default TechnologyPage
