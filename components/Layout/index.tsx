import Navbar from './Navbar';
import Sidebar from './Sidebar';
import styles from 'styles/Layout.module.scss';

const Layout = ({children}) => {
    return (
        <div className={styles.layout_container}>
            <Navbar/>
            {/* <Sidebar/> */}
            {children}
        </div>
    );
}

export default Layout;
