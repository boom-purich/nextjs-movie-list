import styles from 'styles/Movie/Trailer.module.scss';
import YoutubeComponent from 'components/Youtube';

const Trailer = () => {
    return (
        <div className={styles.movie_trailer_container}>
            <div className={styles.movie_trailer_header}>Trailer</div>
            <div className={styles.movie_trailer_content}>
                <YoutubeComponent embedId={'CLdhN4oMxCQ'} />
            </div>
        </div>
    );
}

export default Trailer;
