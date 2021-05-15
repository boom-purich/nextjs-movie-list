import { useEffect, useRef } from 'react';
import Trend from 'components/Trend';
import styles from '../styles/Home.module.scss';

// const scrollToRef = (ref) => setTimeout(() => {window.scrollTo({top:ref.current.offsetTop,behavior:'smooth'})},300);
const scrollToRef = (ref) => {
  setTimeout(() => {window.scrollTo({top:ref.current.offsetTop,behavior:'smooth'})},300);
}

const Home = () => {
  const trendTopicWeek = { topic: 'Trend of this week' };
  const trendTopicThMovie = { topic: 'Thai movie discover' };
  const trendRef = useRef(null);
  const clickScrollDown = () => scrollToRef(trendRef);

  return (
    <div className={styles.home_container}>
      <div className={styles.home_backdrop_container}>
        <img className={styles.backdrop_image} src="https://dpveekit.files.wordpress.com/2017/01/lalaland-finalposterwww-slashfilm-com.jpg" alt="Movie Still Backdrop" />
        <div className={styles.welcome_banner_container}>
          <div className={styles.welcome_word}>Welcome</div>
          <div className={styles.welcome_description} onClick={clickScrollDown}>
            Find your right movies, Explore now.
          </div>
        </div>
      </div>
      <div className={styles.home_trend_container} ref={trendRef}>
        <Trend {...trendTopicWeek} />
        <Trend {...trendTopicThMovie} />
      </div>
    </div>
  )
}

export default Home;
