// import axios from 'axios';
const axios = require('axios');

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: { part: 'snippet', videoId: 'M7FIvfx5J10' , maxResults: '50'},
    headers: {
        // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Key':'8ac1e3c451msh8410b5321d953e3p1641c8jsn354dc2022e62',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);

    return data;

}

// import axios from 'axios';

// export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const options = {
//     params: {
//         maxResults: 50,
//     },
//     headers: {
//         'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA', 
//         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//     },
// };

// export const fetchFromAPI = async (url) => {
//     const { data } = await axios.get(`${BASE_URL}/${url}`, options);

//     return data;
// };