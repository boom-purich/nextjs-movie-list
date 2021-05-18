import { useState } from 'react';
import styles from 'styles/Movie/Discover.module.scss';
import ScrollContainer from 'react-indiana-drag-scroll';
import Skeleton from '@material-ui/lab/Skeleton';

const Discover = () => {

    const [genreLoading, setGenreLoading] = useState<boolean>(false);
    const [resultLoading, setResultLoading] = useState<boolean>(false);
    const [genreList, setGenreList] = useState<Array<string>>([
        'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary',
        'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery',
        'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western'
    ]);
    const [selectedGenre, setSelectedGenre] = useState<number>(0);
    const [resultList, setResultList] = useState<Array<any>>([
        'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary',
        'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery',
        'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western'
    ]);

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
                            list ?
                                (<div className={`${styles.discover_genre_btn} ${selectedGenre === index && styles.selected_genre}`} key={`genre_btn_${index}`} onClick={() => setSelectedGenre(index)}>
                                    <div className={styles.discover_genre_content}>{list}</div>
                                </div>) :
                                <Skeleton animation="pulse" className={styles.skeleton_genre} />
                        ))}
                    </div>
                </ScrollContainer>
                <ScrollContainer horizontal={true} vertical={false}>
                    <div className={styles.discover_result_container}>
                        {(resultLoading ? Array.from(new Array(10)) : resultList).map((list, index) => (
                            list ? (
                                <div className={styles.result_container}>
                                    <div className={styles.result_content}>
                                        <img src={(index % 2) == 0 ? '/image/poster/homestay-poster.jpeg' : '/image/poster/bad-genius-poster.jpeg'} />
                                        <div className={styles.result_detail_container}>
                                            <div className={styles.detail_movie_name}>Bad Genius</div>
                                            <div className={styles.detail_movie_year}>(2017)</div>
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
