import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from 'styles/Layout/SearchBar.module.scss';

const Search = () => {

    const router = useRouter();
    // console.log('Router : ',router);
    const [searchKeyword, setSearchKeyword] = useState('');

    const searchingMovie = () => {
        router.push({ pathname: '/search', query: { keyword: searchKeyword } });
        setSearchKeyword("");
    }

    return (
        <div className={styles.search_container}>
            <div className={styles.search_content}>
                <div className={styles.search_input_container}>
                    <input type="text" className={styles.search_input_field} value={searchKeyword} placeholder="Search movie"
                        onChange={event => setSearchKeyword(event.target.value)} onKeyPress={event => { event.charCode === 13 && searchingMovie() }} />
                </div>
                {/* {
                    searchKeyword && (
                        <div className={styles.clear_btn} onClick={() => setSearchKeyword('')}>
                            <i className={`fas fa-times-circle my-auto ml-auto ${styles.clear_logo}`}></i>
                        </div>
                    )
                } */}
                <div className={styles.search_btn} onClick={searchingMovie}>
                    <i className={`fas fa-search ${styles.search_logo}`}></i>
                </div>
            </div>
        </div>
    );
}

export default Search;
