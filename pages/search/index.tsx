import { GetStaticProps, GetStaticPaths } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from 'styles/Layout/SearchMovie.module.scss';
import ImagePalette from 'react-image-palette'
import MovieModal from 'components/MovieModal';
import { Movie,MovieModalData } from 'models/movie.model';

const SearchKeyword = ({ movies }) => {

    const [primaryColor, setPrimaryColor] = useState('');
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    
    const { query: { keyword } } = useRouter();
    const showMovieDetail = (movieId: string, backgroundColor: string) => {
        setPrimaryColor(backgroundColor);
        setIsShowModal(true);
    }
    
    useEffect(() => {
        !isShowModal && setPrimaryColor('');
    },[isShowModal])

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
                    <div className={styles.card_group_container}>
                        <div className={styles.card_wrapper_container}>
                            <div className={styles.card_content}>
                                <ImagePalette image={"/image/poster/bad-genius-poster.jpeg"} crossOrigin={true}>
                                    {({ backgroundColor }) => <>
                                        <img src="/image/poster/bad-genius-poster.jpeg" className={styles.card_poster} onClick={() => showMovieDetail('1', backgroundColor)} />
                                        <div className={styles.card_description} onClick={() => showMovieDetail('1', backgroundColor)}>
                                            <div className={styles.description_header}>Happy Old Year</div>
                                            <div className={styles.description_detail}>2017</div>
                                        </div>

                                    </>}
                                </ImagePalette>
                            </div>
                            <div className={styles.card_content}>
                                <ImagePalette image={"/image/poster/happy-old-year-poster.jpeg"} crossOrigin={true}>
                                    {({ backgroundColor }) => <>
                                        <img src="/image/poster/happy-old-year-poster.jpeg" className={styles.card_poster} onClick={() => showMovieDetail('2', backgroundColor)} />
                                        <div className={styles.card_description} onClick={() => showMovieDetail('2', backgroundColor)}>
                                            <div className={styles.description_header}>Happy Old Year</div>
                                            <div className={styles.description_detail}>2017</div>
                                        </div>

                                    </>}
                                </ImagePalette>
                            </div>
                            <div className={styles.card_content}>
                                <ImagePalette image={"/image/poster/homestay-poster.jpeg"} crossOrigin={true}>
                                    {({ backgroundColor }) => <>
                                        <img src="/image/poster/homestay-poster.jpeg" className={styles.card_poster} onClick={() => showMovieDetail('3', backgroundColor)} />
                                        <div className={styles.card_description} onClick={() => showMovieDetail('3', backgroundColor)}>
                                            <div className={styles.description_header}>Happy Old Year</div>
                                            <div className={styles.description_detail}>2017</div>
                                        </div>

                                    </>}
                                </ImagePalette>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MovieModal isOpenModal={isShowModal} setIsOpenModal={setIsShowModal} />
        </>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const movies = {};
    return {
        props: { movies }
    }
}

// export const getStaticPaths:GetStaticPaths = async() => {


//     const paths = [];

//     return {
//         paths,
//         fallback:false,
//     }
// }

export default SearchKeyword;
