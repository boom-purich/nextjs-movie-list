import { useState, useRef } from 'react';
import { useRouter } from 'next/router'
import styles from 'styles/Layout/SearchBar.module.scss';
import Popover from '@material-ui/core/Popover';

const Search = () => {

    const router = useRouter();
    // console.log('Router : ',router);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [isOpenPopover, setIsOpenPopover] = useState<boolean>(false);
    const searchBoxRef = useRef(null);
    const searchingMovie = () => {
        searchKeyword ? (
            router.push({ pathname: '/search', query: { keyword: searchKeyword } })
        ) : (
            setIsOpenPopover(true)
        )
        setSearchKeyword("");
    }

    const handleClosePopover = () => {
        setIsOpenPopover(false);
    }

    return (
        <div className={styles.search_container}>
            <div className={styles.search_content} ref={searchBoxRef}>
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
            <Popover
                open={isOpenPopover}
                onClose={handleClosePopover}
                anchorEl={isOpenPopover ? searchBoxRef.current : null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                className="search_popover_container"
            >
                <div className={styles.popover_content}>
                    <div>Please Fill keyword</div>
                    <i className="fas fa-times-circle" onClick={handleClosePopover}></i>
                </div>
            </Popover>
        </div>
    );
}

export default Search;
