import axios from 'axios';
import {responseMapping} from 'utils/responseMapping';

const creditsHandler = async({query:{movie_id}},res) => {
    try{
        const creditMovieUrl = process.env.TMDB_URL + `/movie/${movie_id}/credits` + `?api_key=${process.env.TMDB_KEY}`;
        const { data } = await axios.get(creditMovieUrl);
        const response = responseMapping({cast:data?.cast,crew:data?.crew});
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({});
    }
}

export default creditsHandler;