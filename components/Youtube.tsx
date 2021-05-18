import styles from 'styles/Common/Youtube.module.scss';

const YoutubeComponent = ({ embedId }) => {
    return (
        <div className={styles.video_responsive}>
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}

export default YoutubeComponent;
