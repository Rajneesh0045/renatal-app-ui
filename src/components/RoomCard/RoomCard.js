import React from 'react';
import './RoomCard.css';

const RoomCard = ({imgSrc, roomDetail, price, area, bookingCallback}) => (
    <div className='RoomCard'>
        <div className='cardImg radius-10'>
            <img src={imgSrc} alt={roomDetail}></img>
        </div>
        <div className='details radius-10 backdropBlur'>
            <div>
                <p>{roomDetail}</p>
                <span className='tag price'>{price}</span>
                <span className='tag area'>{area}</span>
            </div>
            <button name='book' className='submitButtom bookRoom' onClick={bookingCallback}>Book!</button>
        </div>
    </div>
)

export default RoomCard;