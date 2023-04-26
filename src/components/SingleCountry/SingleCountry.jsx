/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const SingleCountry = ({country}) => {
    const {name, area, population, flags}= country;
    console.log(country);
    return (
        <div style={{padding: '15px', border: '2px solid purple'}}>
            <img style={{width: '300px', Height: '250px'}} src={flags.png} alt="" />
            <h3>{name.common}</h3>
            <p>area: {area} </p>
            <p>population: {population}</p>
        </div>
    );
};

export default SingleCountry;