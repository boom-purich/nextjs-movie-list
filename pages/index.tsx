import { useState, useEffect, useRef } from 'react';
import Discover from 'components/Discover';
import PopularMovie from 'components/PopularMovie';
import styles from '../styles/Home.module.scss';
import * as Scroll from 'react-scroll';
import { isMobile } from "react-device-detect";

// const scrollToRef = (ref) => setTimeout(() => {window.scrollTo({top:ref.current.offsetTop,behavior:'smooth'})},300);

const Home = () => {
  const trendTopicWeek = { topic: 'Trend of this week' };
  const trendTopicThMovie = { topic: 'Thai movie discover' };
  const trendRef = useRef(null);
  const clickScrollDown = () => {
    let scroll = Scroll.animateScroll;
    let duration: Number = isMobile ? 800 : 100;
    scroll.scrollTo(trendRef.current.offsetTop, { duration: duration, delay: 0, isDynamic: true, spy: true, smooth: true });

  };

  return (
    <div className={styles.home_container}>
      <div className={styles.home_backdrop_container}>
        <img className={styles.backdrop_image} src="https://m.media-amazon.com/images/M/MV5BMzMzOTY5MjE0Nl5BMl5BanBnXkFtZTgwMjAxNjM3MDE@._V1_.jpg" alt="Movie Still Backdrop" />
        <div className={styles.welcome_banner_container}>
          <div className={styles.welcome_word}>Welcome</div>
          <div className={styles.welcome_description} onClick={clickScrollDown}>
            Find your right movies, Explore now.
          </div>
        </div>
      </div>
      <div className={styles.home_trend_container} ref={trendRef}>
        <PopularMovie/>
        <Discover/>
      </div>
    </div>
  )
}

export default Home;
