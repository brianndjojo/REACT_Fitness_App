import React from 'react';
import {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import { exerciseoptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ( setExercises, bodyPart, setBodyPart ) => {

    //State adds functionality.. 
    // The React useState Hook allows us to track state in a function component.
    // State generally refers to data or properties that need to be tracking in an application.
    
    // State defined as empty string. To track search item
    const [search, setSearch] = useState('');
    

    //State defined as empty list.. To track bodyparts..
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async() => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseoptions);
            
            setBodyParts(['all', ...bodyPartsData]);
        }
        
        fetchExercisesData();
        console.log(bodyParts);
    }, [])

   

    // Async Function to fetch exercises from Exercises API
    const handleSearch = async () => {
        // Check if somebody types something in.
        if(search){
            const exercisesData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises', exerciseoptions 
            );
            
            // Handles what data to be returned from exerciseData based on search filter.
            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search) 
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );
            
            // Once Searched clear the searchbar
            setSearch('');
            // Keep the state of the searchedexercises.
            setExercises(searchedExercises);

        }
    }
    
    return (
    <Stack alignItems="center" mt="37px" justifyContent = "center" p = "20px">
        
        <Typography fontWeight={700} sx={{
            fontSize: {lg: '44px', xs: '30px'}}
        } mb="50px" textAlign="center">
            Awesome Exercises you should know!
        </Typography>

        <Box position = "relative" mb = "72px">
            <TextField 
                sx = {{
                    input: {fontWeight: '700',
                    border: 'none',
                    borderRaidus: '4px'
                    },
                    width: { lg: '800px', xs: '350px'} ,
                    backgroundColor: '#fff',
                    borderRadius: '40px'
                }}
                height = "76px" 

                //State Triggers
                value = {search}
                onChange = {(e) => setSearch(e.target.value.toLowerCase())}

                placeholder = "Search Exercises"
                type = "text"
            />

            <Button className='search-btn' 
            sx={{
                bgcolor: '#FF2625',
                width: { lg: '175px', xs: '80px'},
                textTransform: 'none',
                fontSize: { lg: '20px', xs: '14px'},
                height: '56px',
                position: 'absolute',
                right:'0'

            }}
            onClick = {handleSearch}>
                Search
            </Button>
        </Box>
        
        <Box sx={{
            position: 'relative',
            width: '100%',
            p: '20px'
        }}>
            <HorizontalScrollbar data={bodyParts} bodyPart = {bodyPart} setBodyPart = {setBodyPart}/>
        </Box>
    </Stack>
  )
}



export default SearchExercises