import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from 'styles/Layout/Navbar.module.scss';
import Search from './Search';

const Navbar = () => {

    const router = useRouter();
    const [isShowModal, setIsShowModal] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState('');
    const searchingKeyword = () => {
        router.push({ pathname: '/search', query: { keyword: searchKeyword } });
        setSearchKeyword("");
        setIsShowModal(false);
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleShowModal = () => {
                window.innerWidth > 769 && setIsShowModal(false);
            }
            window.addEventListener("resize", handleShowModal);
            handleShowModal();
            return () => { window.removeEventListener("resize", handleShowModal) }
        }
    }, [])

    return (
        <div className={styles.navbar_container}>
            <div className={styles.navbar_content}>
                <div className={styles.navbar_banner_container}>
                    <Link href="/">
                        <div className={styles.navbar_logo_container}>
                            <img src="/image/icons/play-button.svg" className={styles.navbar_logo} />
                        </div>
                    </Link>
                    <Search />
                </div>
                <div className={styles.navbar_profile_btn_group_container}>
                    <div className={styles.navbar_profile_container}>
                        <Link href="/profile">
                            <button type="button" className={styles.profile_btn}>
                                <img src="/image/profile/Nanno-profile.jpeg" className={styles.profile_img_btn} />
                            </button>
                        </Link>
                    </div>
                    <div className={styles.navbar_btn_group_container}>
                        <Link href='/login'>
                            <button type="button" className={styles.btn}>
                                <i className={`fas fa-sign-in-alt ${styles.login_logo}`}></i>
                                Login
                            </button>
                        </Link>
                        <Link href="/register">
                            <button type="button" className={styles.btn}>Join Movie List</button>
                        </Link>
                    </div>
                    <button className={`nav-hamburger-btn ${styles.mobile_btn}`} type="button" onClick={() => setIsShowModal(!isShowModal)}>
                        {isShowModal ?
                            <i className={`fas fa-times ${styles.bar_icon}`}></i> : <i className={`fas fa-bars ${styles.bar_icon}`}></i>
                        }
                    </button>
                </div>

            </div>
            {
                isShowModal &&
                <>
                    <div className={`${styles.navbar_modal_container}`}>
                        <div>
                            <div className={styles.find_movie_word}>Find your movie</div>
                            <div className={styles.modal_search_container}>
                                <button type="button" className={styles.search_btn} onClick={searchingKeyword}>
                                    <i className={`fas fa-search ${styles.search_logo}`}></i>
                                </button>
                                <input type="text" className={styles.search_field} placeholder="Search movie" value={searchKeyword} onChange={event => setSearchKeyword(event.target.value)} onKeyPress={event => { event.charCode === 13 && searchingKeyword() }} />
                                <button type="button" className={styles.clear_btn} onClick={() => setSearchKeyword("")} style={{ visibility: searchKeyword ? 'visible' : 'hidden' }}>
                                    <i className={`fas fa-times-circle my-auto ${styles.clear_logo}`}></i>
                                </button>
                            </div>
                        </div>
                        <div className={styles.modal_btn_group}>
                            <Link href='/login'>
                                <div className={styles.modal_btn_option}>
                                    <i className={`fas fa-sign-in-alt ${styles.btn_logo}`}></i>
                            Login
                        </div>
                            </Link>
                            <Link href="/register">
                                <div className={styles.modal_btn_option}>
                                    Join movie list
                                </div>
                            </Link>
                            <div className={styles.modal_btn_option}>
                                <i className={`fas fa-sign-out-alt ${styles.btn_logo}`}></i>
                    Logout
                    </div>
                        </div>
                    </div>
                </>
            }

        </div>

    );
}

export default Navbar;
