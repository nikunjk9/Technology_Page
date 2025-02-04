'use client';

import React, { useEffect } from 'react'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import ScrollToTop from '@/components/ScrollToTop'
import WhyChooseUs from '../components/WhyChooseUs'
import FAQSection from '../components/FAQs'
import NewsletterSignup from '../components/NewsletterSignUp'
import TechPortfolio from '../components/TechServices';
import TechStackSection from '../components/TechStack';
import ProjectPortfolio from '../components/ProjectPortfolio';
import ProjectStartCTA from '../components/ProjectStartCTA';
import TechTestimonial from '../components/TechTestimonial';






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
