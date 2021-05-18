import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import styles from 'styles/Layout/Layout.module.scss';

const Layout = ({ children }) => {
    const { route } = useRouter();

    return (
        <>
            {(route !== '/login' && route !== '/register')
                ? 
                <div className={styles.layout_container}>
                    <Navbar />
                    {children}
                </div> : 
                <>{children}</>
            }
        </>
    );
}

export default Layout;
