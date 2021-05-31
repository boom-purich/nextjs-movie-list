import { useState,useEffect } from 'react';
import styles from 'styles/Movie/Cast.module.scss';
import ScrollContainer from 'react-indiana-drag-scroll'
import Skeleton from '@material-ui/lab/Skeleton';
import * as _ from 'lodash';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { Cast } from 'models/movie.model';

const CastComponent = ({cast}) => {

    const IMG_URL = 'https://image.tmdb.org/t/p/original';
    // const [loading,setLoading] = useState<boolean>(true)

    const beforeLoad = () => {
        // console.log('Before Load');
    }

    const afterLoad = () => {
        // console.log('After Load');
    }


    return (
        <div className={styles.movie_cast_container}>
            <div className={styles.cast_content_container}>
                <div className={styles.cast_header}>Cast</div>
                <div className={styles.cast_card_group}>
                    <ScrollContainer horizontal={true} vertical={false} className={styles.cast_content}>
                        {
                            cast && cast.map((list, index) => (
                                // <Skeleton key={`skeleton_cast_${index}`} animation="pulse" className={styles.skeleton_container}/>
                                <div className={styles.cast_card_container} key={`cast_card_${index}`}>
                                    <div className={styles.cast_card_content}>
                                        {
                                            list?.profile_path !== null ?  
                                            <div className={styles.cast_card_backdrop_container}>
                                                <LazyLoadImage effect="opacity" wrapperClassName={styles.cast_card_image} src={IMG_URL + list?.profile_path} alt={`cast_${list?.name}_backdrop`}/>
                                            </div>
                                            // <img className={styles.cast_card_image} src={IMG_URL + list?.profile_path} alt="" />
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
