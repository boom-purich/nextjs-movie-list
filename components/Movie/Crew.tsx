import styles from 'styles/Movie/Crew.module.scss';
import ScrollContainer from 'react-indiana-drag-scroll'

const Crew = ({ crew }) => {

    return (
        <div className={styles.movie_crew_container}>
            <div className={styles.movie_crew_header}>Crew</div>
            <div className={styles.movie_crew_content}>
                <ScrollContainer horizontal={true} vertical={false}>
                    <div className={styles.crew_card_group}>
                        {
                            crew && crew.sort((a,b) => a.job.localeCompare(b.job,'en')) && crew.map((list, index) => (
                                <div className={styles.crew_card_container} key={`crew_card_${index}`}>
                                    <div className={styles.crew_card_content}>
                                        <div className={styles.crew_card_header}>{list?.job}</div>
                                        <div className={styles.crew_card_name}>{list?.name}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </ScrollContainer>
            </div>
        </div>
    );
}

export default Crew;
