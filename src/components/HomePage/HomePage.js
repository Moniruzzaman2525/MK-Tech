


import React from 'react';
import BusnessPart from '../BusnessPart/BusnessPart';
import Dashboard from '../Dashboard/Dashboard';
import Slider from '../Slider/Slider';
import Home from './Home/Home';
import Services from './Serivces/Services';

const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <Services></Services>
            <Dashboard></Dashboard>
            <BusnessPart></BusnessPart>
            <Slider></Slider>
        </div>
    );
};

export default HomePage;