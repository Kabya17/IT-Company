import React from 'react';
import web from "../src/images/image8.webp";
import Common from './Common';

const About = () => {
    return (
        <>
            <Common text="Welcome to the About page of" imgsrc={web} visit="/contact" btname="Contact Now" />
        </>
    );
};


export default About;