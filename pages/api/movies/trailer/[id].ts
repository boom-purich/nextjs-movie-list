import axios from 'axios';
import {responseMapping} from 'utils/responseMapping';

const trailerHandler = async({query:{id}},res) => {

    try{
        const trailerMovieUrl = process.env.TMDB_URL + `/movie/${id}/videos` + `?api_key=${process.env.TMDB_KEY}`;
        const { data } = await axios.get(trailerMovieUrl);
        const response = responseMapping(data?.results);
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({});
    }
    
}

export default trailerHandler;