import axios from 'axios';
import {responseMapping} from 'utils/responseMapping';

const genreHandler = async(req,res) => {
    try{
        const genreListUrl = process.env.TMDB_URL + `/genre/movie/list` + `?api_key=${process.env.TMDB_KEY}`;
        const { data } = await axios.get(genreListUrl);
        const response = responseMapping(data?.genres);
        res.status(200).json(response);
    }catch(error) {
        res.status(500).json({});
    }

}

export default genreHandler;