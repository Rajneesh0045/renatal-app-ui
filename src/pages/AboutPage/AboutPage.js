import React from 'react';
import './AboutPage.css';
import StoryCard from '../../components/StoryCard/StoryCard';

const AboutPage = () => (
    <section className='AboutPage' id='aboutPage'>
        <div className='container'>
            <h1 className='sectionHeading'>About Us</h1>
            <p className='sectionIntro'>Allow us to tell you a short story...</p>
            <div className='stories'>
            <StoryCard 
            width="400px"
            height="266px"
            imgSrc="/img/chapter1.jpeg"
            title="Chapter I"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
            />
            <StoryCard 
            width="500px"
            height="333px"
            imgSrc="/img/chapter2.jpeg"
            title="Chapter II"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
            />
            <StoryCard 
            width="400px"
            height="503px"
            imgSrc="/img/chapter3.jpeg"
            title="Chapter III"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
            />
            <StoryCard 
            width="500px"
            height="500px"
            imgSrc="/img/chapter4.jpeg"
            title="Chapter IV"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
            />
            </div>
        </div>
    </section>
)

export default AboutPage;