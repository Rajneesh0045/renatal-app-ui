import React from 'react';
import './StoryCard.css';

const StoryCard = ({width, height, imgSrc, title, description, bookingCallback}) => {
    let storyCardStyle = {
        width: width,
        height: height
    }
    let cardImgStyle = {
        width: width,
        height: height,
        "background-color": "red",
        "background-image": "url("+imgSrc+")",
        "background-position": "center"
    }
    return (
        <div className='StoryCard' style={storyCardStyle} onClick={bookingCallback}>
            <div className='cardImg radius-10' style={cardImgStyle}>
            </div>
            <div className='details radius-10 backdropBlur'>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>)
}
export default StoryCard;