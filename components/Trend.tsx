import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from 'styles/Trend.module.scss';
import Slider from 'react-slick';

const Trend = ({ topic }) => {

    const router = useRouter();

    const sliderSetting = {
        dots: false,
        infinite: false,
        arrows: false,
        //initialSlide: 0,
        className: 'trend_card_group',
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        variableWidth: true
    }

    const selectedMovie = (movieId: Number) => {
        window.location.href = `/movie/${movieId}`;
    }

    return (
        <>
            <div className={styles.trend_container}>
                <div className={styles.trend_content}>
                    <div className={styles.trend_header_word}>
                        {topic}
                    </div>
                    <div className={styles.trend_card_container}>
                        <Slider {...sliderSetting}>
                            <div className={`trend_card_content ${styles.trend_card_content}`} onClick={() => selectedMovie(1)}>
                                <img src="/image/poster/bad-genius-poster.jpeg" alt="bad-genius-poster" className={styles.card_poster} />
                                <div className={styles.card_detail_container}>
                                    <div className={styles.card_name}>Bad Genius (2017)</div>
                                    <div className={styles.card_detail}>05/03/2017</div>
                                </div>
                            </div>
                            <div className={`trend_card_content ${styles.trend_card_content}`} onClick={() => selectedMovie(2)}>
                                    <img src="/image/poster/happy-old-year-poster.jpeg" alt="bad-genius-poster" className={styles.card_poster} />
                                    <div className={styles.card_detail_container}>
                                        <div className={styles.card_name}>Happy Old Year (2019)</div>
                                        <div className={styles.card_detail}>26/12/2019</div>
                                    </div>
                                </div>

                        </Slider>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Trend;
