import React from 'react'

// Some logic is needed..
import { useState } from 'react'

// Box Component from MaterialUI
import { Box } from '@mui/system'

// Components
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import HorizontalScrollbar from '../components/HorizontalScrollbar'


const Home = () => {

  //These states must be at home since they reflect across the entire application..
  //State defined as 'all' by default
  const [bodyPart, setbodyPart] = useState('all');
  //State defined as empty list.. To track exercises..
  const [exercises, setExercises] = useState([]);
  return (
   <Box>
       <HeroBanner/>
       <SearchExercises 
        setExercises = {setExercises}
        setbodyPart = {setbodyPart}
        bodyPart = {bodyPart}
       />
       <Exercises
        setExercises = {setExercises}
        setbodyPart = {setbodyPart}
        bodyPart = {bodyPart}
       />
   </Box>
  )
}

export default Home