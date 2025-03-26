import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const countries = use(countriesPromise);
    
    const handleVisitedCountries = (country) => {
        console.log('country visited click', country)
    }

    return (
        <div>
            <h1>Traveling Countries: {countries.length} </h1>
            <h3>Traveled so far: </h3>
            <div className='countries'>
                {
                    countries.map(country => <Country 
                        key={country.cca3}
                        handleVisitedCountries={handleVisitedCountries} 
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;