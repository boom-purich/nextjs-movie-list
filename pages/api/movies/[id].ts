import axios from 'axios';
import {responseMapping} from 'utils/responseMapping';

const movieHandler = async({query:{id}},res) => {
    try{
        const movieDetailUrl  = process.env.TMDB_URL + `/movie/${id}` + `?api_key=${process.env.TMDB_KEY}`;
        const { data } = await axios.get(movieDetailUrl);
        const response = responseMapping(data);
        res.status(200).json(response);

    }catch(error) {
        res.status(500).json({});
    }
}

export default movieHandler;