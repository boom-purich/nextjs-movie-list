import styles from 'styles/Recommendation.module.scss';
import ScrollContainer from 'react-indiana-drag-scroll';

const Recommendation = () => {
    return (
        <div className={styles.movie_recommendation_container}>
            <div className={styles.movie_recommendation_header}>Recommendations</div>
            <ScrollContainer horizontal={true} vertical={false}>
                <div className={styles.movie_recommendation_content}>
                    <div className={styles.movie_recommendation_card_container}>
                        <img src="/image/backdrop/Friend Zone 4.jpg" alt="" className={styles.recommendation_backdrop} />
                        <div className={styles.separate_line}></div>
                        <div className={styles.recommendation_movie_name}>Friend Zone</div>
                    </div>
                    <div className={styles.movie_recommendation_card_container}>
                        <img src="/image/backdrop/Friend Zone 4.jpg" alt="" className={styles.recommendation_backdrop} />
                        <div className={styles.separate_line}></div>
                        <div className={styles.recommendation_movie_name}>Friend Zone</div>
                    </div>
                    <div className={styles.movie_recommendation_card_container}>
                        <img src="/image/backdrop/Friend Zone 4.jpg" alt="" className={styles.recommendation_backdrop} />
                        <div className={styles.separate_line}></div>
                        <div className={styles.recommendation_movie_name}>Friend Zone</div>
                    </div>
                    <div className={styles.movie_recommendation_card_container}>
                        <img src="/image/backdrop/Friend Zone 4.jpg" alt="" className={styles.recommendation_backdrop} />
                        <div className={styles.separate_line}></div>
                        <div className={styles.recommendation_movie_name}>Friend Zone</div>
                    </div>
                    <div className={styles.movie_recommendation_card_container}>
                        <img src="/image/backdrop/Friend Zone 4.jpg" alt="" className={styles.recommendation_backdrop} />
                        <div className={styles.separate_line}></div>
                        <div className={styles.recommendation_movie_name}>Friend Zone</div>
                    </div>
                    <div className={styles.movie_recommendation_card_container}>
                        <img src="/image/backdrop/Friend Zone 4.jpg" alt="" className={styles.recommendation_backdrop} />
                        <div className={styles.separate_line}></div>
                        <div className={styles.recommendation_movie_name}>Friend Zone</div>
                    </div>
                </div>
            </ScrollContainer>

        </div>
    );
}

export default Recommendation;
