import { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Slide from '@material-ui/core/Slide';
import movieModalStyles from 'styles/Movie/MovieModal.module.scss';
import { convertDateToYear } from 'utils/convertTime';

const NewMovieModal = ({ isOpenModal, setIsOpenModal, movie }) => {

    const IMG_URL = 'https://image.tmdb.org/t/p/original';
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const [isOpenMovieModal, setIsOpenMovieModal] = useState<boolean>(false);

    const handleLoading = (event) => {
        // console.log('Event : ', event);
    }

    const checkImageLoad = (url) => {

        const [imageLoading, setImageLoading] = useState<boolean>(true);
        useEffect(() => {
            const loadingImage = (url) => {
                if(url || url !== null) {
                    const loadImg = new Image();
                    loadImg.src = IMG_URL + url;
    
                    loadImg.onload = () => {
                        setImageLoading(false);
                    }
                }else{
                    setImageLoading(false);
                }
                
            }

            loadingImage(url);
        }, [url])

        return {
            imageLoading,
            setImageLoading
        }
    }

    const handleCloseModal = () => {
        setIsOpenModal(false);
        setImageLoading(true);
    }

    const { imageLoading,setImageLoading } = checkImageLoad(movie?.backdrop_path);

    return (
        <Modal
            open={isOpenModal && !imageLoading}
            onClose={handleCloseModal}
            closeAfterTransition
            className={movieModalStyles.movie_modal_container}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Slide direction="down" in={isOpenModal} timeout={{ enter: 300, exit: 300 }} mountOnEnter unmountOnExit>
                <div className={movieModalStyles.movie_modal_content}>
                    <div className={movieModalStyles.movie_backdrop_container}>
                        {
                            movie?.backdrop_path ?
                                <img src={IMG_URL + movie?.backdrop_path} className={movieModalStyles.movie_backdrop} />
                                :
                                <div className={movieModalStyles.no_backdrop_container}>
                                    <i className={`fas fa-image ${movieModalStyles.image_icon}`}></i>
                                    <div className={movieModalStyles.no_movie_word}>No Movie Backdrop</div>
                                </div>
                        }
                    </div>
                    <div className={movieModalStyles.movie_modal_detail_container}>
                        <div className={movieModalStyles.header_btn_container}>
                            <div className={`${movieModalStyles.detail_header_container}`}>
                                <div className={movieModalStyles.detail_header_word}>{movie?.title}</div>
                                <div className={movieModalStyles.year_name}>{movie?.original_title} - ({convertDateToYear(movie?.release_date)})</div>
                            </div>
                        </div>
                        <div className={movieModalStyles.movie_modal_overview}>
                            {movie?.overview}
                        </div>
                        <div className={movieModalStyles.see_full_detail_container}>
                            <div className={`${movieModalStyles.btn_group_container}`}>
                                <button type="button" className={`${movieModalStyles.btn_group_btn} ${movieModalStyles.like_btn}`}>
                                    <i className={`fas fa-thumbs-up ${movieModalStyles.btn_logo}`}></i>
                                </button>
                                <button type="button" className={`${movieModalStyles.btn_group_btn} ${movieModalStyles.add_btn}`}>
                                    <i className={`fas fa-heart ${movieModalStyles.btn_logo}`}></i>
                                </button>
                            </div>

                            <button type="button" className={movieModalStyles.see_full_detail_btn} onClick={() => { window.location.href = `/movie/${movie?.id}` }}>
                                More info
                                <i className={`fas fa-angle-right ${movieModalStyles.btn_right_logo}`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </Slide>
        </Modal>

    );
}

export default NewMovieModal;
