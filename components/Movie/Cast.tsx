import styles from 'styles/Cast.module.scss';
import ScrollContainer from 'react-indiana-drag-scroll'

const Cast = () => {
    return (
        <div className={styles.movie_cast_container}>
            <div className={styles.cast_content_container}>
                <div className={styles.cast_header}>Cast</div>
                <div className={styles.cast_card_group}>
                    <ScrollContainer horizontal={true} vertical={false} className={styles.cast_content}>
                        <div className={styles.cast_card_container}>
                            <div className={styles.cast_card_content}>
                                <img className={styles.cast_card_image} src="/image/profile/Aokbab-profile.jpeg" alt="" />
                                <div className={styles.cast_card_detail}>
                                    <div className={styles.detail_name}>Chutimon Chuengcharoensukying</div>
                                    <div className={styles.detail_description}>
                                        <div className={styles.detail_separate_line}></div>
                                        <div className={styles.detail_role}>Lynn</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cast_card_container}>
                            <div className={styles.cast_card_content}>
                                <img className={styles.cast_card_image} src="/image/profile/Aokbab-profile.jpeg" alt="" />
                                <div className={styles.cast_card_detail}>
                                    <div className={styles.detail_name}>Chutimon Chuengcharoensukying</div>
                                    <div className={styles.detail_description}>
                                        <div className={styles.detail_separate_line}></div>
                                        <div className={styles.detail_role}>Lynn</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cast_card_container}>
                            <div className={styles.cast_card_content}>
                                <img className={styles.cast_card_image} src="/image/profile/Aokbab-profile.jpeg" alt="" />
                                <div className={styles.cast_card_detail}>
                                    <div className={styles.detail_name}>Chutimon Chuengcharoensukying</div>
                                    <div className={styles.detail_description}>
                                        <div className={styles.detail_separate_line}></div>
                                        <div className={styles.detail_role}>Lynn</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cast_card_container}>
                            <div className={styles.cast_card_content}>
                                <img className={styles.cast_card_image} src="/image/profile/Aokbab-profile.jpeg" alt="" />
                                <div className={styles.cast_card_detail}>
                                    <div className={styles.detail_name}>Chutimon Chuengcharoensukying</div>
                                    <div className={styles.detail_description}>
                                        <div className={styles.detail_separate_line}></div>
                                        <div className={styles.detail_role}>Lynn</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cast_card_container}>
                            <div className={styles.cast_card_content}>
                                <img className={styles.cast_card_image} src="/image/profile/Aokbab-profile.jpeg" alt="" />
                                <div className={styles.cast_card_detail}>
                                    <div className={styles.detail_name}>Chutimon Chuengcharoensukying</div>
                                    <div className={styles.detail_description}>
                                        <div className={styles.detail_separate_line}></div>
                                        <div className={styles.detail_role}>Lynn</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cast_card_container}>
                            <div className={styles.cast_card_content}>
                                <img className={styles.cast_card_image} src="/image/profile/Aokbab-profile.jpeg" alt="" />
                                <div className={styles.cast_card_detail}>
                                    <div className={styles.detail_name}>Chutimon Chuengcharoensukying</div>
                                    <div className={styles.detail_description}>
                                        <div className={styles.detail_separate_line}></div>
                                        <div className={styles.detail_role}>Lynn</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cast_card_container}>
                            <div className={styles.cast_card_content}>
                                <img className={styles.cast_card_image} src="/image/profile/Aokbab-profile.jpeg" alt="" />
                                <div className={styles.cast_card_detail}>
                                    <div className={styles.detail_name}>Chutimon Chuengcharoensukying</div>
                                    <div className={styles.detail_description}>
                                        <div className={styles.detail_separate_line}></div>
                                        <div className={styles.detail_role}>Lynn</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollContainer>
                </div>

            </div>
        </div>
    );
}

export default Cast;
