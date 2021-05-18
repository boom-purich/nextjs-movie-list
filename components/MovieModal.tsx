import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Slide from '@material-ui/core/Slide';
import movieModalStyles from 'styles/Movie/MovieModal.module.scss';

const NewMovieModal = ({ isOpenModal, setIsOpenModal }) => {
    return (
        <Modal
            open={isOpenModal}
            onClose={() => setIsOpenModal(false)}
            closeAfterTransition
            className={movieModalStyles.movie_modal_container}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Slide direction="down" in={isOpenModal} timeout={{enter:300,exit:300}} mountOnEnter unmountOnExit>
                <div className={movieModalStyles.movie_modal_content}>
                    <div className={movieModalStyles.movie_backdrop_container}>
                        <img src="/image/backdrop/bad-genius-backdrop.jpg" className={movieModalStyles.movie_backdrop} />
                    </div>
                    <div className={movieModalStyles.movie_modal_detail_container}>
                        <div className={movieModalStyles.header_btn_container}>
                            <div className={`${movieModalStyles.detail_header_container}`}>
                                <div className={movieModalStyles.detail_header_word}>three billboards outside ebbing missouri</div>
                                <div className={movieModalStyles.year_name}>ฉลาดเกมส์โกง - (2017)</div>
                            </div>
                        </div>
                        <div className={movieModalStyles.movie_modal_overview}>
                            Lynn, a brilliant student, after helping her friends to get the grades they need, develops the idea of starting a much bigger exam-cheating business.
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

                            <button type="button" className={movieModalStyles.see_full_detail_btn}>
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
