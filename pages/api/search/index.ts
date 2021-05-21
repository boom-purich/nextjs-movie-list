import responseMapping from 'utils/responseMapping';
import axios from 'axios';


const searchHandler = async({query:{keyword}},res) => {
    try{
        const searchMovieUrl:string = process.env.TMDB_URL + `/search/movie?api_key=${process.env.TMDB_KEY}`;
        const {data} = await axios.get(searchMovieUrl,{params:{query:keyword}});
        const response = responseMapping(data?.results);
        res.status(200).json(response);
    }catch(error) {
        res.status(500).json({});
    }
    
}

export default searchHandler;