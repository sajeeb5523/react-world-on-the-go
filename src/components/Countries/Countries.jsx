import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const countries = use(countriesPromise);
    
    // visited country event handler
    const handleVisitedCountries = (country) => {
        console.log('country visited click', country)
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    // visited flag event handler
    const handleVisitedFlag = (flag) => {
        console.log('country visited click', flag)
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h1>Traveling Countries: {countries.length} </h1>
            <h3>Traveled so far: {visitedCountries.length} </h3>
            <div className='visited_flag_container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <ol>
                {
                    visitedCountries.map( country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country 
                        key={country.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag} 
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;