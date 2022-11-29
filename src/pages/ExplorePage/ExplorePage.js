import React from 'react';
import RoomCard from '../../components/RoomCard/RoomCard';
import './ExplorePage.css';

const ExplorePage = () => (
    <section className='ExplorePage' id='explorePage'>
        <div className='container'>
            <h1 className='sectionHeading'>Explore</h1>
            <p className='sectionIntro'>From one-guest rooms to penthouses with pools and gardens</p>
            <div className='exploreRooms'>
                <RoomCard 
                    imgSrc={process.env.PUBLIC_URL+ '/img/kingSize.jpeg'}
                    roomDetail='Room with one king-size bed'
                    price='35$'
                    area='28м²'
                    bookingCallback={()=>{console.log('Booked')}}
                />
                <RoomCard 
                    imgSrc={process.env.PUBLIC_URL+ '/img/penthouse.jpeg'}
                    roomDetail='Penthouse for 8 person'
                    price='2039$'
                    area='438м²'
                    bookingCallback={()=>{console.log('Booked')}}
                />
            </div>
        </div>
    </section>
)

export default ExplorePage;