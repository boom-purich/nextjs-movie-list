import { GetServerSideProps } from 'next';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
import styles from 'styles/Layout/SearchMovie.module.scss';
import ImagePalette from 'react-image-palette'
import MovieModal from 'components/MovieModal';
import { Movie, MovieModalData } from 'models/movie.model';
import axios from 'axios';
import { convertDateToYear } from 'utils/convertTime';
import Skeleton from '@material-ui/lab/Skeleton';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SearchKeyword = ({ movies }) => {

    const IMG_URL = 'https://image.tmdb.org/t/p/original';

    const [primaryColor, setPrimaryColor] = useState('');
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const [selectMovieData, setSelectMovieData] = useState<Movie>({});
    const { query: { keyword } } = useRouter();
    const showMovieDetail = (movie: any, backgroundColor?: string) => {
        setSelectMovieData(movie);
        // setPrimaryColor(backgroundColor);
        setIsShowModal(true);
    }
    const useMovieSearch = (movies) => {
        const [loading, setLoading] = useState<boolean>(true);
        const [movieList, setMovieList] = useState<Array<Movie>>([]);
        const checkMovies = () => {
            setLoading(true);
            if (movies) {
                setMovieList(movies);
                setTimeout(() => {
                    setLoading(false);
                }, 1500);

            }
        }

        useEffect(() => {
            checkMovies();
        }, [movies])

        return {
            loading, movieList
        }
    }
    const { movieList, loading } = useMovieSearch(movies);
    const cardGroupRef = useRef(null);
    const getNumberOfSkeleton = (ref) => {
        const [numberOfSkeleton, setNumberOfSkeleton] = useState<number>(0);
        useEffect(() => {
            ref?.current?.offsetWidth && (setNumberOfSkeleton(Math.floor(ref.current.offsetWidth / 360)))
        }, [])
        return {
            numberOfSkeleton
        }
    }

    const { numberOfSkeleton } = getNumberOfSkeleton(cardGroupRef);

    useEffect(() => {
        !isShowModal && setPrimaryColor('');
    }, [isShowModal])

    return (
        <>
            <div className={styles.search_movie_container}>
                <div className={styles.search_backdrop_container} style={{ backgroundColor: primaryColor }}></div>
                <div className={styles.search_movie_content}>
                    <div className={`${styles.search_movie_header_container}`}>
                        <div className={`${styles.header_search_keyword}`}>
                            <div className={styles.topic_header}>Search Keyword</div>
                            <div className={styles.topic_word}>{keyword}</div>
                        </div>
                    </div>
                    <div className={styles.card_group_container} >
                        <div className={styles.card_wrapper_container} ref={cardGroupRef}>
                            {
                                (loading ? Array.from(new Array(numberOfSkeleton)) : movieList).map((list, index) => (
                                    list?.id ?
                                        (<div className={styles.card_content} key={`search_card_${index}`}>
                                            {
                                                list?.poster_path !== null ? (
                                                    <>
                                                        <div className={styles.card_poster_container} onClick={() => showMovieDetail(list)}>
                                                            <LazyLoadImage src={IMG_URL + list?.poster_path} effect="opacity" wrapperClassName={styles.card_poster} />
                                                        </div>
                                                        {/* <img src={IMG_URL + list?.poster_path} className={styles.card_poster} onClick={() => showMovieDetail(list, backgroundColor)} /> */}
                                                        <div className={styles.card_description} onClick={() => showMovieDetail(list)}>
                                                            <div className={styles.description_header}>{list?.title}</div>
                                                            <div className={styles.description_detail}>{convertDateToYear(list?.release_date)}</div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className={styles.no_poster_path_container}><i className={`fas fa-image ${styles.image_logo}`}></i></div>
                                                        <div className={styles.card_description} onClick={() => showMovieDetail(list, '')}>
                                                            <div className={styles.description_header}>{list?.title}</div>
                                                            <div className={styles.description_detail}>{convertDateToYear(list?.release_date)}</div>
                                                        </div>
                                                    </>
                                                )
                                            }

                                        </div>)
                                        :
                                        <Skeleton animation="pulse" className={styles.skeleton_card} key={`skeleton_card_${index}`} />
                                ))

                            }
                        </div>
                        {
                            !loading && movieList && movieList.length === 0 && (
                                <div className={styles.not_found_movie_search_container}>
                                    <div className={styles.not_found_movie_search_content}>
                                        <div className={styles.not_found_logo_container}>
                                            <i className={`fas fa-film ${styles.not_found_logo}`}></i>
                                        </div>
                                        <div className={styles.not_found_topic}>No movies found</div>
                                        <div className={styles.not_found_description}>It seems we can’t find any results based on your search.</div>
                                    </div>
                                </div>
                            )
                        }

                        {/* {(!loading && movieList && movieList.length > 0 ? <div>Have Content</div> : <div>No Content</div> )} */}
                    </div>
                </div>
            </div>
            {/* <MovieModal isOpenModal={isShowModal} setIsOpenModal={setIsShowModal} movie={selectMovieData} /> */}
            <MovieModal {...{ isOpenModal: isShowModal, setIsOpenModal: setIsShowModal, movie: selectMovieData }} />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ query: { keyword } }) => {
    const baseUrl = process.env.NODE_ENV === 'development' ? process.env.API_DEVELOPMENT_URL : process.env.API_PRODUCTION_URL;
    const searchMovieUrl: string = `${baseUrl}/api/search?keyword=${keyword}`;
    const { data: { resultData } } = await axios.get(encodeURI(searchMovieUrl));
    // console.log('Movie : ',resultData);
    const movies = resultData;
    return {
        props: { movies }
    }
}

export default SearchKeyword;
