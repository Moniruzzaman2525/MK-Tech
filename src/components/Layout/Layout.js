

import React, { Fragment } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import Home from '../HomePage/Home/Home';
import Services from '../HomePage/Serivces/Services';

const Layout = () => {
    return <Fragment>
        <Header></Header>
        <Home></Home>
        <Services></Services>
        <Dashboard></Dashboard>
    </Fragment>
};

export default Layout;