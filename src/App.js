/* Define the DOM for the App */

import React from 'react';

import './App.css';

// Routes used to navigate between homepage and other pages.
import { Route, Routes } from 'react-router-dom';
// Box Tempalte from MaterialUI
import { Box } from '@mui/material';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//Pages
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';


const App = () => {
    return(
        //sx determines the width, in this case xl devices, m = "auto" means automargin from MaterialUI
        <Box width = "400px" sx={{ width: {xl: '1448px'} }} m = "auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer />
        </Box> 
    )
}

export default App