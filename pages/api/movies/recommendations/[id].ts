import axios from 'axios';
import {responseMapping} from 'utils/responseMapping';

const recommendHandler = async({query:{id}},res) => {
    try{
        const recommendationUrl = process.env.TMDB_URL + `/movie/${id}/recommendations` + `?api_key=${process.env.TMDB_KEY}`;
        const { data } = await axios.get(recommendationUrl);
        const response = responseMapping(data?.results);
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({});
    }
}

export default recommendHandler;