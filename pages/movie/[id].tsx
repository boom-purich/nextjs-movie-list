import { GetServerSideProps } from 'next'
import Head from 'next/head';
import styles from 'styles/Movie/Movie.module.scss';
import CastComponent from 'components/Movie/Cast';
import CrewComponent from 'components/Movie/Crew';
import Trailer from 'components/Movie/Trailer';
import Recommendation from 'components/Movie/Recommendation';
import axios from 'axios';
import moment from 'moment';
import {Movie}  from 'models/movie.model';
import { IsoLanguageCode } from 'models/language.model';
import { convertDateToYear,convertRuntime } from 'utils/convertTime';

const MovieComponent = ({movie,cast,crew,trailer,watches,recommends}) => {
    
    const IMG_URL = 'https://image.tmdb.org/t/p/original';

    const directorName = (crew:any):string => {
        let name:string = '';
        crew && (name = crew.filter(list => list.job === 'Director')[0].name);
        return name;
    }

    const convertCodeToLanguage = (language_code:string) => {
        let name:string = '';
        language_code && (name = IsoLanguageCode[language_code]?.name);
        return name;
    }

    return (
        
        <div className={styles.movie_container}>
            <Head>
                <title>{movie?.title} - Movie List</title>
            </Head>
            <div className={styles.movie_backdrop_container}>
                <img className={styles.movie_backdrop} src={IMG_URL+movie?.backdrop_path} />
                <div className={styles.movie_content}>
                    <div className={styles.movie_poster_topic_container}>
                        <div className={styles.movie_poster_container}>
                            <img className={styles.movie_poster} src={IMG_URL+movie?.poster_path} />
                        </div>
                        <div className={styles.movie_topic_container}>
                            <div className={styles.movie_header_year_container}>
                                <div className={styles.header_name}>{movie?.title}</div>
                                <div className={styles.year_name}>({ convertDateToYear(movie?.release_date)})</div>
                                <div className={styles.separate_line}></div>
                            </div>
                            <div className={styles.movie_overview_container}>
                                <div className={styles.overview_header}>Overview</div>
                                <div className={styles.overview_detail}>
                                    {movie?.overview}
                            </div>
                            </div>
                            <div className={styles.movie_genre_crew_container}>
                                <div className={styles.genre_container}>
                                    <div className={styles.genre_header}>Genre</div>
                                    <div className={styles.genre_detail}>{ movie?.genres && movie?.genres.map(list => list.name).join(', ') }</div>
                                </div>
                                <div className={styles.genre_container}>
                                    <div className={styles.genre_header}>Duration</div>
                                    <div className={styles.genre_detail}>{ convertRuntime(movie?.runtime) }</div>
                                </div>
                                <div className={styles.genre_container}>
                                    <div className={styles.genre_header}>Language</div>
                                    <div className={styles.genre_detail}>{ convertCodeToLanguage(movie?.original_language) }</div>
                                </div>
                                <div className={styles.genre_container}>
                                    <div className={styles.genre_header}>Director</div>
                                    <div className={styles.genre_detail}>{directorName(crew)}</div>
                                </div>
                            </div>
                            <div className={styles.movie_available_btn_container}>
                                <div className={styles.movie_available_container}>
                                    <div className={styles.available_header}>Available on</div>
                                    <div className={styles.available_logo_group}>
                                        { watches && watches.map((list,index) => (
                                            <img src={IMG_URL+list?.logo_path} key={`watch_provider_logo_${index}`} className={styles.available_logo} />
                                        ))}         
                                    </div>
                                </div>
                                <div className={styles.movie_btn_group_container}>
                                    <button type="button" className={styles.movie_like_btn}>
                                        <i className={`fas fa-thumbs-up ${styles.like_logo}`}></i>
                                        <span className={styles.btn_word}>Like</span>
                                    </button>
                                    <button type="button" className={styles.movie_love_btn}>
                                        <i className={`fas fa-heart ${styles.love_logo}`}></i>
                                        <span className={styles.btn_word}>Love</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className={styles.movie_detail_container}>
                            <div className={styles.movie_separate_line}></div>
                            <div className={styles.movie_detail_content}>
                                <CastComponent {...{cast}} />
                                <CrewComponent {...{crew}} />
                                <Trailer {...{trailer}}/>
                                <Recommendation {...{recommends}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export const getServerSideProps: GetServerSideProps = async ({params:{id}}) => {
    
    const {data:{resultData}} = await axios.get(`/api/movies/${id}`);
    const castCrewData = await axios.get(`/api/movies/credits?movie_id=${id}`);
    const trailerList = await axios.get(`/api/movies/trailer/${id}`);
    const recommendList = await axios.get(`/api/movies/recommendations/${id}`);
    const watchProviderList = await axios.get(`/api/movies/watch/${id}`);
    const movie:Movie = resultData;
    const { cast,crew } = castCrewData?.data.resultData;
    const trailer = trailerList?.data?.resultData[0] || {};
    const recommends = recommendList?.data?.resultData || [];
    const watches = watchProviderList?.data?.resultData || [];
    return {
        props:{
            movie,
            cast,
            crew,
            trailer,
            recommends,
            watches
        }
    }
}



export default MovieComponent;





