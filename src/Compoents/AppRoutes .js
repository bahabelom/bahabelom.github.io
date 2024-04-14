import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import Contacts from '../Pages/Contacts';
import About from '../Pages/About';


const AppRoutes = () => {
        return (
            <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/about"  element = {<About />} />
            </Routes>
        );
};

export default AppRoutes;
