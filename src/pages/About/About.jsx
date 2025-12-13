import React from 'react';
import AboutHero from '../../components/Abouts/AboutHero';
import MissionSection from '../../components/Abouts/MissionSection';
import WhyChooseUs from '../../components/Abouts/WhyChooseUs';
import StatsSection from '../../components/Abouts/StatsSection';

const About = () => {
    return (
        <div>
            <AboutHero />
            <MissionSection />
            <WhyChooseUs />
            <StatsSection />
        </div>
    );
};

export default About;