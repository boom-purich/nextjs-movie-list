import { useRouter } from 'next/router';
import styles from 'styles/Movie.module.scss';
import Cast from 'components/Movie/Cast';
import Crew from 'components/Movie/Crew';
import Trailer from 'components/Movie/Trailer';
import Recommendation from 'components/Movie/Recommendation';

const MovieComponent = () => {

    return (
        <div className={styles.movie_container}>
            <div className={styles.movie_backdrop_container}>
                <img className={styles.movie_backdrop} src="/image/backdrop/bad-genius-backdrop-2.jpeg" />
                <div className={styles.movie_content}>
                    <div className={styles.movie_poster_topic_container}>
                        <div className={styles.movie_poster_container}>
                            <img className={styles.movie_poster} src="/image/poster/bad-genius-poster.jpeg" />
                        </div>
                        <div className={styles.movie_topic_container}>
                            <div className={styles.movie_header_year_container}>
                                <div className={styles.header_name}>Bad Genius</div>
                                <div className={styles.year_name}>(2017)</div>
                                <div className={styles.separate_line}></div>
                            </div>
                            <div className={styles.movie_overview_container}>
                                <div className={styles.overview_header}>Overview</div>
                                <div className={styles.overview_detail}>
                                    Lynn, a brilliant student, after helping her friends to get the grades they need, develops the idea of starting a much bigger exam-cheating business.
                            </div>
                            </div>
                            <div className={styles.movie_genre_crew_container}>
                                <div className={styles.genre_container}>
                                    <div className={styles.genre_header}>Genre</div>
                                    <div className={styles.genre_detail}>Comedy, Drama, Crime, Thriller</div>
                                </div>
                                <div className={styles.genre_container}>
                                    <div className={styles.genre_header}>Duration</div>
                                    <div className={styles.genre_detail}>2h 10m</div>
                                </div>
                                <div className={styles.genre_container}>
                                    <div className={styles.genre_header}>Language</div>
                                    <div className={styles.genre_detail}>Thai</div>
                                </div>
                                <div className={styles.genre_container}>
                                    <div className={styles.genre_header}>Director</div>
                                    <div className={styles.genre_detail}>Nuttawut Poonpiriya</div>
                                </div>
                            </div>
                            <div className={styles.movie_available_btn_container}>
                                <div className={styles.movie_available_container}>
                                    <div className={styles.available_header}>Available on</div>
                                    <div className={styles.available_logo_group}>
                                        <img src="https://image.tmdb.org/t/p/original/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg" className={styles.available_logo} />
                                        <img src="https://image.tmdb.org/t/p/original/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg" className={styles.available_logo} />
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
                                <Cast />
                                <Crew />
                                <Trailer/>
                                <Recommendation/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default MovieComponent;



