import styles from 'styles/Movie/Crew.module.scss';
import ScrollContainer from 'react-indiana-drag-scroll'

const Crew = () => {
    return (
        <div className={styles.movie_crew_container}>
            <div className={styles.movie_crew_header}>Crew</div>
            <div className={styles.movie_crew_content}>
                <ScrollContainer horizontal={true} vertical={false}>
                    <div className={styles.crew_card_container}>
                        <div className={styles.crew_card_content}>
                            <div className={styles.crew_card_header}>Production</div>
                            <div className={styles.crew_card_name}>Vanridee Pongsittisak</div>
                        </div>
                        <div className={styles.crew_card_content}>
                            <div className={styles.crew_card_header}>Production</div>
                            <div className={styles.crew_card_name}>Vanridee Pongsittisak</div>
                        </div>
                        <div className={styles.crew_card_content}>
                            <div className={styles.crew_card_header}>Production</div>
                            <div className={styles.crew_card_name}>Vanridee Pongsittisak</div>
                        </div>
                        <div className={styles.crew_card_content}>
                            <div className={styles.crew_card_header}>Production</div>
                            <div className={styles.crew_card_name}>Vanridee Pongsittisak</div>
                        </div>
                        <div className={styles.crew_card_content}>
                            <div className={styles.crew_card_header}>Production</div>
                            <div className={styles.crew_card_name}>Vanridee Pongsittisak</div>
                        </div>
                    </div>
                </ScrollContainer>
            </div>
        </div>
    );
}

export default Crew;
