import styles from 'styles/Movie/Movies.module.scss';

const MovieListComponent = () => {
    return (
        <div className={styles.movie_list_container}>
            <div className={styles.movie_backdrop_container}>
                <img src="https://miro.medium.com/max/5760/1*Cg43oYnM3Mfn2TJAxBFvWA.png"/>
            </div>
            <div className={styles.movie_list_content}>
                <div className={styles.movie_list_header_container}>
                    <div className={styles.header_main}>Find Your Movie</div>
                    <div className={styles.header_sub}>let's explore.</div>
                </div>
                <div className={styles.movie_list_card}>
                    <div className={styles.movie_card_container}>
                        <div className={styles.movie_card_content}>
                            <img src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/c74741d64b6772c7053ca9fab0484e81/52c4b305-ad2a-4a6a-a708-22112f818dfb_rw_1920.jpg?h=eaa6ae2a9bd6f07ea62904032f2f4fba"/>
                            <div className={styles.movie_name}>Homestay</div>
                        </div>
                    </div>
                    <div className={styles.movie_card_container}>
                        <div className={styles.movie_card_content}>
                            <img src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/c74741d64b6772c7053ca9fab0484e81/52c4b305-ad2a-4a6a-a708-22112f818dfb_rw_1920.jpg?h=eaa6ae2a9bd6f07ea62904032f2f4fba"/>
                            <div className={styles.movie_name}>Homestay</div>
                        </div>
                    </div>
                    <div className={styles.movie_card_container}>
                        <div className={styles.movie_card_content}>
                            <img src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/c74741d64b6772c7053ca9fab0484e81/52c4b305-ad2a-4a6a-a708-22112f818dfb_rw_1920.jpg?h=eaa6ae2a9bd6f07ea62904032f2f4fba"/>
                            <div className={styles.movie_name}>Homestay</div>
                        </div>
                    </div>
                    <div className={styles.movie_card_container}>
                        <div className={styles.movie_card_content}>
                            <img src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/c74741d64b6772c7053ca9fab0484e81/52c4b305-ad2a-4a6a-a708-22112f818dfb_rw_1920.jpg?h=eaa6ae2a9bd6f07ea62904032f2f4fba"/>
                            <div className={styles.movie_name}>Homestay</div>
                        </div>
                    </div>
                    <div className={styles.movie_card_container}>
                        <div className={styles.movie_card_content}>
                            <img src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/c74741d64b6772c7053ca9fab0484e81/52c4b305-ad2a-4a6a-a708-22112f818dfb_rw_1920.jpg?h=eaa6ae2a9bd6f07ea62904032f2f4fba"/>
                            <div className={styles.movie_name}>Homestay</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieListComponent;
