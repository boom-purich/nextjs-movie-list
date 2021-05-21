import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from 'styles/Movie/PopularMovie.module.scss';
import ScrollContainer from 'react-indiana-drag-scroll';
import Skeleton from '@material-ui/lab/Skeleton';
import { Movie,PopularSelected } from 'models/movie.model';
import axios from 'axios';

const PopularMovie = () => {

    // const router = useRouter();
    const IMG_URL = 'https://image.tmdb.org/t/p/original';
    const usePopularMovieList = () => {
        const [movieList,setMovieList] = useState<Array<Movie>>([]);
        const [loading, setLoading] = useState<boolean>(true);
        const [movieSelected, setMovieSelected] = useState<PopularSelected>({});
        const getPopularMovieList = async() => {
            try{
                const { data: {resultData} } = await axios.get(`/api/movies/popular`);
                resultData && setMovieList(resultData);
                resultData && setMovieSelected({imgUrl:resultData[0]?.backdrop_path,movie_name:resultData[0]?.title,movie_id:resultData[0]?.id});
                setLoading(false);
            }catch(error){
                setMovieList([]);
                setMovieSelected({imgUrl:'',movie_name:'',movie_id:0});
                setLoading(false);
            }
        }

        useEffect(() => {
            getPopularMovieList();
        },[])

        return {
            movieSelected,
            setMovieSelected,
            movieList,
            setMovieList,
            loading,
            setLoading
        }
    }

    const { movieSelected,setMovieSelected,movieList,setMovieList,loading,setLoading } = usePopularMovieList();
    // const [movieSelected, setMovieSelected] = useState({ imgUrl: '', movie_name: '', selectIndex: 0 });

    const clickSelectMovie = ({title,backdrop_path,id}:any) => {
        setMovieSelected({imgUrl:backdrop_path,movie_id:id,movie_name:title});
    }

    return (
        <div className={styles.new_trend_container}>
            <div className={styles.new_trend_content}>
                <div className={styles.new_trend_header}>
                    <div className={styles.separate_line}></div>
                    Popular Movie
                </div>
                {loading ?
                    (
                        <Skeleton className={styles.skeleton_selected_movie} animation="pulse"/>
                    ) :
                    (
                        <div className={styles.new_trend_selected_list_container}>
                            <div className={styles.new_trend_selected_backdrop_container}>
                                <img src={IMG_URL + movieSelected?.imgUrl} />
                            </div>
                            <div className={styles.new_trend_top_movie_container}>
                                <div className={styles.top_movie_header}>{movieSelected?.movie_name}</div>
                                <button type="button" className={styles.more_info_btn} onClick={() => {window.location.href = `/movie/${movieSelected?.movie_id}`}}>More info</button>
                            </div>
                        </div>
                    )}

                <ScrollContainer horizontal={true} vertical={false}>
                    <div className={styles.new_trend_movie_card_container}>
                        {(loading ? Array.from(new Array(6)) : movieList).map((list, index) => (
                            !list?.id ?
                                (
                                    <div key={`popular-movie-skeleton-${index}`}>
                                        <Skeleton className={styles.skeleton_img_content} animation="pulse" />
                                        <Skeleton className={styles.skeleton_name_content} animation="pulse" width="60%" height={16} />
                                    </div>
                                )
                                :
                                (
                                    <div className={`${styles.movie_card_container}`} key={`popular-movie-card-${index}`} onClick={() => clickSelectMovie(list)}>
                                        <div className={`${styles.movie_card_content} ${list?.id === movieSelected?.movie_id && styles.movie_card_selected}`}>
                                            <img src={IMG_URL + list?.backdrop_path} />
                                            <div className={styles.card_movie_name}>{list?.title}</div>
                                        </div>
                                    </div>
                                )
                        ))}
                    </div>
                </ScrollContainer>

            </div>
        </div >
    );
}

export default PopularMovie;
