import axios from 'axios';
import responseMapping from 'utils/responseMapping';

const watchHandler = async({query:{id}},res) => {
    try{
        const watchUrl = process.env.TMDB_URL + `/movie/${id}/watch/providers` + `?api_key=${process.env.TMDB_KEY}` + `&language=en`;
        const { data:{results} } = await axios.get(watchUrl);
        const response = responseMapping(results['US']?.flatrate);
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({});
    }
}

export default watchHandler;