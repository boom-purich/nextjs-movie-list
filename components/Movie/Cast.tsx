import styles from 'styles/Movie/Cast.module.scss';
import ScrollContainer from 'react-indiana-drag-scroll'
import * as _ from 'lodash';
// import { Cast } from 'models/movie.model';

const CastComponent = ({cast}) => {

    const IMG_URL = 'https://image.tmdb.org/t/p/original';

    return (
        <div className={styles.movie_cast_container}>
            <div className={styles.cast_content_container}>
                <div className={styles.cast_header}>Cast</div>
                <div className={styles.cast_card_group}>
                    <ScrollContainer horizontal={true} vertical={false} className={styles.cast_content}>
                        {
                            cast && cast.map((list, index) => (
                                <div className={styles.cast_card_container} key={`cast_card_${index}`}>
                                    <div className={styles.cast_card_content}>
                                        {
                                            list?.profile_path !== null ?  <img className={styles.cast_card_image} src={IMG_URL + list?.profile_path} alt="" />
                                            : <div className={styles.cast_card_no_image}><i className={`fas fa-user ${styles.user_logo}`}></i></div>
                                        }
                                        <div className={styles.cast_card_detail}>
                                            <div className={styles.detail_name}>{list?.name}</div>
                                            <div className={styles.detail_description}>
                                                <div className={styles.detail_separate_line}></div>
                                                <div className={styles.detail_role}>{list?.character}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </ScrollContainer>
                </div>

            </div>
        </div>
    );
}

export default CastComponent;
