import axios from 'axios';
import responseMapping from 'utils/responseMapping';

const popularHandler = async(req,res) => {

    try{
        const popularMovieUrl = process.env.TMDB_URL + `/movie/popular` + `?api_key=${process.env.TMDB_KEY}`;
        const { data } = await axios.get(popularMovieUrl);
        const response = responseMapping(data?.results);
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({})
    }

}

export default popularHandler;