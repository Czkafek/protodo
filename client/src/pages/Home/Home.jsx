import styles from './Home.module.css'
import Sidebar from '../../components/Sidebar/Sidebar';

function Home() {

    return <div className={styles.homeBody}>
        <Sidebar/>
        <h1>Home Page</h1>
    </div>
}

export default Home;