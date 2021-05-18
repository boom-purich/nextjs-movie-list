import { useState, useEffect } from 'react';
import styles from 'styles/Movie/PopularMovie.module.scss';
import ScrollContainer from 'react-indiana-drag-scroll';
import Skeleton from '@material-ui/lab/Skeleton';

const PopularMovie = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const movieList = [
        {
            imgUrl: 'http://nawapolnawapol.com/uploads/149/149_still02_1.jpeg',
            movie_name: 'Die Tomorrow',
        },
        {
            imgUrl: 'https://pro2-bar-s3-cdn-cf1.myportfolio.com/c74741d64b6772c7053ca9fab0484e81/94d513d3-7d24-40f8-a339-d08fb929ebc0_rw_1920.jpg?h=54b0ebf24980abe9fb60e4847303af85',
            movie_name: 'Bad Genius',
        },
        {
            imgUrl: 'https://lionsgate.brightspotcdn.com/d8/19/5d5ddb4748abb51ac05244fdb10c/la-la-land-movies-backgroundimages-01.jpg',
            movie_name: 'La La Land',
        },
        {
            imgUrl: 'https://m.media-amazon.com/images/M/MV5BMzMzOTY5MjE0Nl5BMl5BanBnXkFtZTgwMjAxNjM3MDE@._V1_.jpg',
            movie_name: 'Her',
        },
        {
            imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTQ0OTkxMzIyN15BMl5BanBnXkFtZTgwMzI1MjY1MDE@._V1_.jpg',
            movie_name: 'The Grand Budapest Hotel',
        },
        {
            imgUrl: 'https://cdn.vox-cdn.com/thumbor/ab7GeC585ehvC-Y4zEkqUcwOa9c=/0x0:2067x1377/1200x800/filters:focal(869x524:1199x854)/cdn.vox-cdn.com/uploads/chorus_image/image/54120135/your_name_oped.0.jpg',
            movie_name: 'Your Name',
        },
        {
            imgUrl: 'https://pro2-bar-s3-cdn-cf4.myportfolio.com/c74741d64b6772c7053ca9fab0484e81/52c4b305-ad2a-4a6a-a708-22112f818dfb_rw_1920.jpg?h=eaa6ae2a9bd6f07ea62904032f2f4fba',
            movie_name: 'Homestay',
        },
        {
            imgUrl: 'https://thecinemaholic.com/wp-content/uploads/2019/12/gone-girl-DF-05063_05054_COMP5_rgb.0.0.jpg',
            movie_name: 'Gone Girl',
        },
        {
            imgUrl: 'https://i.ytimg.com/vi/8v8oNWqIy4Y/maxresdefault.jpg',
            movie_name: 'Happy Old Year',
        },
    ]

    const [movieSelected, setMovieSelected] = useState({ imgUrl: '', movie_name: '', selectIndex: 0 });

    const clickSelectMovie = (index: number) => {
        let { movie_name, imgUrl } = movieList[index];
        setMovieSelected({ selectIndex: index, imgUrl: imgUrl, movie_name: movie_name });
    }

    useEffect(() => {
        setMovieSelected({ ...movieSelected, imgUrl: movieList[0].imgUrl, movie_name: movieList[0].movie_name });
        setLoading(false);
    }, [])

    return (
        <div className={styles.new_trend_container}>
            <div className={styles.new_trend_content}>
                <div className={styles.new_trend_header}>
                    <div className={styles.separate_line}></div>
                    Popular Movie
                </div>
                {loading ?
                    (
                        <Skeleton className={styles.skeleton_selected_movie} animation="pulse"/>
                    ) :
                    (
                        <div className={styles.new_trend_selected_list_container}>
                            <div className={styles.new_trend_selected_backdrop_container}>
                                <img src={movieSelected?.imgUrl} />
                            </div>
                            <div className={styles.new_trend_top_movie_container}>
                                <div className={styles.top_movie_header}>{movieSelected?.movie_name}</div>
                                <button type="button" className={styles.more_info_btn}>More info</button>
                            </div>
                        </div>
                    )}

                <ScrollContainer horizontal={true} vertical={false}>
                    <div className={styles.new_trend_movie_card_container}>
                        {(loading ? Array.from(new Array(6)) : movieList).map((list, index) => (
                            !list ?
                                (
                                    <div key={`popular-movie-skeleton-${index}`}>
                                        <Skeleton className={styles.skeleton_img_content} animation="pulse" />
                                        <Skeleton className={styles.skeleton_name_content} animation="pulse" width="60%" height={16} />
                                    </div>
                                )
                                :
                                (
                                    <div className={`${styles.movie_card_container}`} key={`popular-movie-card-${index}`} onClick={() => clickSelectMovie(index)}>
                                        <div className={`${styles.movie_card_content} ${index === movieSelected.selectIndex && styles.movie_card_selected}`}>
                                            <img src={list?.imgUrl} />
                                            <div className={styles.card_movie_name}>{list?.movie_name}</div>
                                        </div>
                                    </div>
                                )
                        ))}




                    </div>
                </ScrollContainer>

            </div>
        </div >
    );
}

export default PopularMovie;
