/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SingleCountry from '../SingleCountry/SingleCountry';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <div className='countries-container'>
                {
                    countries.map(country => <SingleCountry country={country}  key={country.ccn3}></SingleCountry>)
                }
            </div>
        </div>
    );
};

export default Countries;