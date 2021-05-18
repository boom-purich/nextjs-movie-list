import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from 'styles/Profile/Profile.module.scss';
import MovieListComponent from 'components/Profile/MovieList';
import { MovieList } from 'models/movie.model';

const Profile = () => {

    const [likeMovieList, setLikeMovieList] = useState<MovieList>(new MovieList('Liked List'));
    const [loveMovieList, setLoveMovieList] = useState<MovieList>(new MovieList('Love List'));

    useEffect(() => {
        // setLikeMovieList({...likeMovieList,loading:false,movieList:[{title:'Heart Attack'},{title:'Heart Attack'},{title:'Heart Attack'},{title:'Heart Attack'},{title:'Heart Attack'}]})
    }, [])

    return (
        <div className={styles.profile_container}>
            <div className={styles.profile_backdrop_container}>
                <img src="/image/profile/Nanno-profile.jpeg" className={styles.profile_backdrop} />
            </div>
            <div className={styles.profile_content}>
                <div className={styles.profile_image_container}>
                    <img src="/image/profile/Nanno-profile.jpeg" />
                </div>
                <div className={styles.profile_name_setting_container}>
                    <div className={styles.profile_name_container}>Boom Purich Sangprasert</div>
                    <button type="button" onClick={() => {window.location.href = '/profile/setting'}}><i className={`fas fa-pen ${styles.edit_icon}`}></i>Setting Profile</button>
                </div>
                {/* <div className={styles.separate_line}></div> */}
                <div className={styles.profile_movie_list_container}>
                    <MovieListComponent {...likeMovieList} />
                    <MovieListComponent {...loveMovieList} />
                </div>
            </div>
        </div>
    );
}

export default Profile;
