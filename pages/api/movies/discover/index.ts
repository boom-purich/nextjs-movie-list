import axios from 'axios';
import {responseMapping} from 'utils/responseMapping';

const discoverHandler = async({query:{genre_id}},res) => {
    try{
        const discoverUrl = process.env.TMDB_URL + `/discover/movie` + `?api_key=${process.env.TMDB_KEY}` + `${genre_id ? ('&with_genres=' + genre_id) : ''}`;
        const { data } = await axios.get(discoverUrl);
        const response = responseMapping(data?.results);
        res.status(200).json(response);
    }catch(error) {
        res.status(500).json({});
    }
}

export default discoverHandler;