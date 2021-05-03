import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from 'styles/Navbar.module.scss';

const Navbar = () => {

    return (
        <div className={styles.navbar_container}>
            <div className={styles.navbar_content}>
                <div className={styles.navbar_banner_container}>
                    <Image src="/image/icons/play-button.svg" width={48} height={48} />
                    <span className={`d-none d-md-block ${styles.banner_word}`}>Movie List</span>
                </div>
                {/* <div className="search_box_container">
                    <input className={styles.search_box_field} type="text"/>
                </div> */}
                <div className={styles.navbar_btn_group_container}>
                    <button type="button" className={styles.btn}>
                        <i className={`fas fa-sign-in-alt ${styles.login_logo}`}></i>
                        Login
                    </button>
                    <button type="button" className={styles.btn}>Join Movie List</button>

                </div>

                {/* <div className={styles.navbar_user_btn_container}>

                </div> */}

                <div className="dropdown d-md-none">
                        <button className={`${styles.mobile_btn}`} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className={`fas fa-angle-down ${styles.bar_icon}`}></i></button>
                    <div className={`dropdown-menu ${styles.mobile_toggle_container}`} aria-labelledby="dropdownMenuButton">
                        <div className={styles.toggle_list}><i className={`fas fa-sign-in-alt ${styles.toggle_logo}`}></i> Login</div>
                        <div className={styles.toggle_list}>Join Movie List</div>
                        <div className={styles.toggle_list}><i className={`fas fa-sign-out-alt ${styles.toggle_logo}`}></i>Logout</div>
                    </div>
                </div>
            </div>

            {/* <div className={styles.navbar_mobile_container}>
                    <button className={styles.mobile_btn}><i className={`fas fa-angle-down ${styles.bar_icon}`}></i></button>
                    <div className={styles.mobile_toggle_container}>
                                <div className={styles.toggle_list}><i className={`fas fa-sign-in-alt ${styles.toggle_logo}`}></i> Login</div>
                                <div className={styles.toggle_list}>Join Movie List</div>
                                <div className={styles.toggle_list}><i className={`fas fa-sign-out-alt ${styles.toggle_logo}`}></i>Logout</div>
                            </div>

                </div> */}

        </div>
        
    );
}

export default Navbar;
