import React from "react";
import './RentalSearch.css'

const RentalSearch = () => (
    <div className="RentalSearch backdropBlur">
        <form>
            <label>
                <p>
                    CITY:
                </p>
                <input type="text" name="city" placeholder="Select Your City"/>
            </label>
            <label>
                <p>
                    DATES:
                </p>
                <input type="text" name="date" placeholder="Select Your dates"/>
            </label>
            <label>
                <p>
                    GUESTS:
                </p>
                <input type="text" name="guests" placeholder="Add Guests"/>
            </label>
            <label className="submitButtom" id="rentalSearchButton">
                <p>
                    <img src={process.env.PUBLIC_URL+ '/img/search.svg'} alt="submit" />
                    Search
                </p>
                <submit type="text" name="name"/>
            </label>
        </form>
    </div>
)

export default RentalSearch;