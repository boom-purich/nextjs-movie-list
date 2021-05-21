import { useState,useEffect,useRef } from 'react';
import styles from 'styles/Movie/Discover.module.scss';
import ScrollContainer from 'react-indiana-drag-scroll';
import Skeleton from '@material-ui/lab/Skeleton';
import { Genre,Movie } from 'models/movie.model';
import { convertDateToYear } from 'utils/convertTime'
import axios from 'axios';

const Discover = () => {

    const IMG_URL = 'https://image.tmdb.org/t/p/original';
    const useGenreList = () => {
        const [genreList,setGenreList] = useState<Array<Genre>>([]);
        const [genreLoading, setGenreLoading] = useState<boolean>(true);
        const getGenreList = async () => {
            try{
                const genreUrl:string = `/api/movies/genre` ;
                const { data: {resultData} } = await axios.get(genreUrl);
                resultData && setGenreList(resultData);
                setGenreLoading(false);
            }catch(error) {
                setGenreList([]);
                setGenreLoading(false);   
            }
        }
        useEffect(() => {
            getGenreList();
        },[])

        return {
            genreList,
            setGenreList,
            genreLoading,
            setGenreLoading
        }
    }

    const { genreList,setGenreList,genreLoading,setGenreLoading } = useGenreList();
    const [selectedGenre, setSelectedGenre] = useState<number>(28);
    const useResultList = (genre_id:number) => {
        const [resultList, setResultList] = useState<Array<Movie>>([]);
        const [resultLoading, setResultLoading] = useState<boolean>(true);
        const getResultList = async(genre_id:number) => {
            setResultLoading(true);
            try{
                const { data:{resultData} } = await axios.get(`/api/movies/discover?genre_id=${genre_id}`);
                resultData && setResultList(resultData);
                resultRef.current.scrollLeft = 0;
                setResultLoading(false);
            }catch(error){
                resultRef.current.scrollLeft = 0;
                setResultList([]);
                setResultLoading(false);
            }
        }

        useEffect(() => {
            getResultList(genre_id);
        },[genre_id])

        return {
            resultList,
            setResultList,
            resultLoading,
            setResultLoading
        }
    }

    const resultRef = useRef(null);

    const {resultList,setResultList,resultLoading, setResultLoading} = useResultList(selectedGenre);
    

    return (
        <div className={styles.discover_container}>
            <div className={styles.discover_content}>
                <div className={styles.discover_header_container}>
                    <div className={styles.separate_line}></div>
                    <div className={styles.header_name}>Discover</div>
                </div>
                <ScrollContainer horizontal={true} vertical={false}>
                    <div className={styles.discover_genre_container}>
                        {(genreLoading ? Array.from(new Array(10)) : genreList).map((list, index) => (
                            list?.id ?
                                (<div className={`${styles.discover_genre_btn} ${selectedGenre === list?.id && styles.selected_genre}`} key={`genre_btn_${index}`} onClick={() => setSelectedGenre(list?.id)}>
                                    <div className={styles.discover_genre_content}>{list?.name}</div>
                                </div>) :
                                <Skeleton animation="pulse" className={styles.skeleton_genre} key={`skeleton_genre_${index}`} />
                        ))}
                    </div>
                </ScrollContainer>
                <ScrollContainer horizontal={true} vertical={false} innerRef={resultRef}>
                    <div className={styles.discover_result_container}>
                        {(resultLoading ? Array.from(new Array(10)) : resultList).map((list, index) => (
                            list?.id ? (
                                <div className={styles.result_container} key={`result_container_${index}`} onClick={() => {window.location.href = `/movie/${list?.id}`}}>
                                    <div className={styles.result_content}>
                                        <img src={IMG_URL + list?.poster_path} />
                                        <div className={styles.result_detail_container}>
                                            <div className={styles.detail_movie_name}>{list?.title}</div>
                                            <div className={styles.detail_movie_year}>({convertDateToYear(list?.release_date)})</div>
                                        </div>
                                    </div>
                                </div>
                            ) :
                                (
                                    <div className={styles.skeleton_result_container} key={`skeleton_result_${index}`}>
                                        <Skeleton animation="pulse" className={styles.skeleton_result_img} />
                                        <Skeleton animation="pulse" className={styles.skeleton_result_name} />
                                        <Skeleton animation="pulse" className={styles.skeleton_result_year} />
                                    </div>
                                )
                        ))}
                    </div>
                </ScrollContainer>
            </div>
        </div>
    );
}

export default Discover;
