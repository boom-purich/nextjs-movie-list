import { MovieList } from 'models/movie.model';
import styles from 'styles/Profile/MovieList.module.scss';
import ScrollContainer from 'react-indiana-drag-scroll';
import Skeleton from '@material-ui/lab/Skeleton';

const MovieListComponent = ({ headerName, loading, movieList }: MovieList) => {
    return (
        <div className={styles.profile_movie_list_content}>
            <div className={styles.movie_like_list_header_container}>
                <div className={styles.like_header}>{headerName}</div>
                <div className={styles.separate_line}></div>
            </div>
            {/* Movie List : {JSON.stringify(loading ? Array.from(new Array(4)) : movieList)} */}
            <div className={styles.movie_like_content}>
                <ScrollContainer horizontal={true} vertical={false} className={styles.like_list_scrollbar}>
                    <div className={styles.movie_like_card_group}>
                        {(loading ? Array.from(new Array(4)) : movieList).map((list, index) => (
                            !list ?
                                <div>
                                    <Skeleton className={styles.skeleton_img_content} animation="pulse" />
                                    <Skeleton className={styles.skeleton_name_content} animation="pulse" width="60%" height={16} />
                                </div>
                                :
                                <div className={styles.movie_card_container}>
                                    <div className={styles.movie_card_content}>
                                        <div className={styles.movie_card_image_container}>
                                            <img src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/c74741d64b6772c7053ca9fab0484e81/a8748c23ef2c9b94006cae2d_rw_1920.jpg?h=f9f31900b3d6298188c3d0eb19cd1b1f" />
                                            <button type="button"><i className={`fas fa-trash ${styles.delete_icon}`}></i></button>
                                        </div>
                                        <div className={styles.movie_name}>Heart Attack</div>
                                    </div>
                                </div>
                        ))}
                    </div>
                </ScrollContainer>
            </div>
        </div>
    );
}

export default MovieListComponent;
