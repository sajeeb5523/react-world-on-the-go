import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // setVisited(true);

        // system : 1
        // if(visited === true){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }

        // system : 2
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    
    
    return (
        <div className={`country ${visited && 'country_visited'}`}>
            <h3>Name: {country.name.common} </h3>   
            <img src={country.flags.png} alt="" className='image'/>
            <p>Independent: {country.independent? 'Free': 'Not free' }</p>
            <p>Population: {country.population}</p>
            <button className={visited ? 'btn_visited' : 'btn_not_visited'} onClick={handleVisited}>
                {visited? 'Visited' : 'Not Visited' }
            </button>
            <button onClick={ () => handleVisitedFlag(country.flags.png)}>Add visited flag</button>
        </div>
    );
};

export default Country;