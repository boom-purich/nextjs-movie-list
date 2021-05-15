import {useRef,useEffect} from 'react';
import Modal from 'react-modal';
import { Movie,MovieModalData } from 'models/movie.model';
import movieModalStyles from 'styles/MovieModal.module.scss';

const MovieModal = ({isShowModal,setIsShowModal}) => {


    const movieModalRef = useRef(null);

    const handleClickOutSide = (event) => {
        movieModalRef.current && movieModalRef.current.contains(event.target) ? setIsShowModal(true) : setIsShowModal(false);
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutSide);
        return () => { document.removeEventListener('mousedown', handleClickOutSide) }
    }, [movieModalRef])

    return (
        <Modal
                isOpen={isShowModal}
                ariaHideApp={false}
                closeTimeoutMS={500}
                style={{ overlay: { zIndex: 1000, backgroundColor: 'transparent', overflow: 'auto' } }}
                className={movieModalStyles.movie_modal_container}
            >
                <div className={movieModalStyles.movie_modal_content} ref={movieModalRef}>
                    <div className={movieModalStyles.movie_backdrop_container}>
                        <img src="/image/backdrop/bad-genius-backdrop.jpg" className={movieModalStyles.movie_backdrop} />
                    </div>
                    <div className={movieModalStyles.movie_modal_detail_container}>
                        <div className={movieModalStyles.header_btn_container}>
                            <div className={`mr-auto ${movieModalStyles.detail_header_container}`}>
                                <div className={movieModalStyles.detail_header_word}>three billboards outside ebbing missouri</div>
                                <div className={movieModalStyles.year_name}>ฉลาดเกมส์โกง - (2017)</div>
                            </div>
                        </div>
                        <div className={movieModalStyles.movie_modal_overview}>
                            Lynn, a brilliant student, after helping her friends to get the grades they need, develops the idea of starting a much bigger exam-cheating business.
                        </div>
                        <div className={movieModalStyles.see_full_detail_container}>
                            <div className={`mr-auto ${movieModalStyles.btn_group_container}`}>
                                <button type="button" className={`${movieModalStyles.btn_group_btn} ${movieModalStyles.like_btn}`}>
                                    <i className={`fas fa-thumbs-up ${movieModalStyles.btn_logo}`}></i>
                                </button>
                                <button type="button" className={`${movieModalStyles.btn_group_btn} ${movieModalStyles.add_btn}`}>
                                    <i className={`fas fa-heart ${movieModalStyles.btn_logo}`}></i>
                                </button>
                            </div>

                            <button type="button" className={movieModalStyles.see_full_detail_btn}>
                                See Movie Detail
                                <i className={`fas fa-angle-right ${movieModalStyles.btn_right_logo}`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
    );
}

export default MovieModal;
