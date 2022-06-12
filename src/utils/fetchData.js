

//Options to establish connection to rapidapi exercisedb.
export const exerciseoptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '2544cb040bmsh747404be3836f17p158327jsnfc29349e40be'
        
    }
};

// Make Connection w/ RapidAPI to retrieve exercises data.
export const fetchData = async (url, options) => {

    //retrieve response from rapidapi
    const response = await fetch(url, options);

    //JSONIFY response from rapidapi
    const data = await response.json();
    return data;
}