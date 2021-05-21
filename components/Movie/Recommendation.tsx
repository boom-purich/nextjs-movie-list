import styles from 'styles/Movie/Recommendation.module.scss';
import ScrollContainer from 'react-indiana-drag-scroll';

const Recommendation = ({ recommends }) => {

    const IMG_URL = 'https://image.tmdb.org/t/p/original';

    return (
        <div className={styles.movie_recommendation_container}>
            <div className={styles.movie_recommendation_header}>Recommendations</div>
            <ScrollContainer horizontal={true} vertical={false}>
                <div className={styles.movie_recommendation_content}>
                    {
                        recommends && recommends.map((list, index) => (
                            <div className={styles.movie_recommendation_card_container} key={`recommendation_card_${index}`} onClick={() => {window.location.href = `/movie/${list?.id}`}}>
                                {
                                    list?.backdrop_path ? <img src={IMG_URL+list?.backdrop_path} alt="" className={styles.recommendation_backdrop} />
                                    : <div className={styles.no_backdrop_recommendation}><i className={`fas fa-image ${styles.image_logo}`}></i></div>
                                }
                                <div className={styles.separate_line}></div>
                                <div className={styles.recommendation_movie_name}>{list?.title}</div>
                            </div>
                        ))
                    }
                </div>
            </ScrollContainer>

        </div>
    );
}

export default Recommendation;
